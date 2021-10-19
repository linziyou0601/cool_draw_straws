<template>
  <div id="app">
    <!-- 標題區 -->
    <header ref="header" class="bg-grad-color-A text-center py-4">
      <h2 class="fw-900">看起來蝦趴一點的抽籤程式</h2>
    </header>

    <!-- 主內容區 -->
    <main class="container-fluid p-0 p-md-2 p-lg-5 bg-grad-color-B">
      <section class="p-0 p-md-2 mb-3">
        <h3 class="fw-700">
          抽籤結果&emsp;
          <b-form-checkbox 
            v-model="sortable" 
            :class="{'checkbox-wrap': true, 'active': sortable}" 
            button
          >{{ sortable ? '排序' : '不排序' }}</b-form-checkbox>
        </h3>
        <b-card class="mt-2 p-3">
          <transition-group name="flip-list" tag="b-row">
            <b-col 
              v-for="(item, key) in candidates" 
              :key="key+''"
              :order="(sortable? sortedKeys: keys).indexOf(key)+1" 
              cols="12" 
              class="mb-3"
            >
              <h6 style="line-height:35px;">
                <b-img v-if="item.crown" src="icons8_queen_crown_48px.png" class="crown" width="35" />&emsp;
                {{ key }}&emsp;
                （{{ (item.value / votes.length * 100).toFixed(2) }}%）
              </h6>
              <b-progress :max="votes.length" show-value show-progress animated>
                <b-progress-bar :value="item.value" :label="`${item.value}`"/>
              </b-progress>
            </b-col>
          </transition-group>
          <b-row v-if="keys.length>0" class="px-3 mt-3">
            <h5 class="mx-auto" style="line-height:35px;">已抽出：{{ sum_votes }}／總數：{{ votes.length }}</h5>
          </b-row>
        </b-card>
      </section>

      <section class="p-0 p-md-2 mb-3">
        <h3 class="fw-700">抽籤設定</h3>
        <b-card class="mt-2 p-3">
          <b-row>
            <b-col cols="12" class="mb-3">
              <h6>要抽幾位</h6>
              <b-form-input v-model.number="nums" type="number" min="1"></b-form-input>
            </b-col>

            <b-col cols="12" class="mb-3">
              <h6>抽籤項目</h6>
              <b-form-textarea v-model="inp" placeholder="請輸入抽籤項目（以半形逗號「,」分隔），會自動去除重複及空值" rows="6" max-rows="20" />
            </b-col>

            <b-col cols="12" class="mb-3">
              <h6>總抽出次數</h6>
              <b-form-input ref="totalField" v-model.number="total" type="number" @input="updateTotal"></b-form-input>
            </b-col>

            <b-col cols="12" class="mb-3">
              <h6>每幾秒抽一次（單位：ms）</h6>
              <b-form-input v-model.number="intv" type="number"></b-form-input>
            </b-col>

            <b-col cols="12" class="mb-3 text-center">
              <b-button type="button" variant="primary" class="my-2" @click="doDraw">開抽</b-button>&emsp;
              <b-button type="button" variant="danger" class="my-2" @click="doClear">清空</b-button>
            </b-col>
          </b-row>
        </b-card>
      </section>
    </main>

    <!-- 頁尾區 -->
    <footer class="container-fluid px-0 px-md-5 bg-grad-color-A">
      <b-row class="justify-content-center align-content-center pb-5">
        <b-col id="footer-panel" cols="12">
          <div class="card-body text-center">
            Linziyou <a
              class="text-dark text-decoration-none"
              href="https://github.com/linziyou0601/cool_draw_straws"
              data-size="large"
              aria-label="Star linziyou0601/cool_draw_straws on GitHub"
            >
              <fa :icon="['fab', 'github']" /> GitHub
            </a>
          </div>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nums: 1,
      inp: '',
      total: 100,
      intv: 100,
      sortable: true,

      sum_votes: 0,
      votes: [],
      keys: [],
      sortedKeys: [],
      candidates: {},
      interval_id: null,
    }
  },
  watch: {
    sortable() {
      this.sortingKeys()
    },
  },
  methods: {
    // 清除抽籤
    doClear() {
      // 清空原值
      this.sum_votes = 0
      this.votes = []
      this.keys = []
      this.sortedKeys = []
      this.candidates = {}
      // 清空interval
      if (this.interval_id!==null) clearInterval(this.interval_id)
      this.interval_id = null
    },
    // 開始抽籤
    doDraw() {
      // 設定新值
      this.doClear()
      this.keys = Array.from(new Set(this.inp.split(",").filter(Boolean)))
      for (const key of this.keys) this.candidates[key] = { value: 0, crown: false }
      this.sortingKeys()
      // 抽出所有票數 並 洗牌
      this.votes = Array.from({ length: this.total }, () => Math.floor(Math.random() * this.keys.length))
      this.fisherYatesShuffle(this.votes)
      // 滑到頂部 並 設定interval
      this.scrollToTop()
      if (this.intv<1) {
        this.interval_id = -1
        while (this.interval_id!==null) {
          this.drawOne()
        }
      } else {
        this.interval_id = setInterval(this.drawOne, this.intv);
      }
    },
    // 開票
    drawOne() {
      // 抽出
      const vote = this.votes[this.sum_votes++]
      if (vote !== undefined) {
        // 票數計入
        const key = this.keys[vote]
        this.candidates[key].value += 1
        this.sortingKeys()
        // 還沒抽完但已過半
        this.computeSafeCrown(key)
      } else {
        // 清空interval
        clearInterval(this.interval_id)
        this.interval_id = null
        // 計算結果
        this.sum_votes--
        this.computeFinalCrown()
      }
    },
    // 計算取得安全票數者
    computeSafeCrown(key) {
      const value = this.candidates[key].value
      const safe = Math.floor(this.votes.length / (this.nums+1)) + 1
      if (value >= safe) this.candidates[key].crown = true      
    },
    // 計算票多者
    computeFinalCrown() {
      let sum = 0
      let prevVal = 0
      for (const key of this.sortedKeys) {
        if (sum < this.nums || this.candidates[key].value === prevVal) {
          prevVal = this.candidates[key].value
          this.candidates[key].crown = true
          sum++
        } else break
      }
    },
    // 按得票重新排序Keys
    sortingKeys() {
      this.sortedKeys = [...this.keys]
      this.sortedKeys.sort((a, b) => this.candidates[b].value - this.candidates[a].value)
    },
    // Fisher–Yates shuffle洗牌
    fisherYatesShuffle(arr){
      for (let i = arr.length-1; i>0; i--){
        // random index
        const j = Math.floor( Math.random() * (i + 1) )
        // swap
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    },
    // 移到最頂
    scrollToTop() {
      const el = this.$refs.header;
      if (el) el.scrollIntoView({behavior: 'smooth'});
    },
    // 更新total欄位時
    updateTotal(value) {
      const el = this.$refs.totalField.$el
      if (value < 1) {
        el.value = 1
        el.dispatchEvent(new Event('input'));
      } else if (value > 10000000) {
        el.value = 10000000
        el.dispatchEvent(new Event('input'));
      }
    }
  },
}
</script>

<style>
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Thin.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Thin.woff)
      format('woff');
  font-weight: 100;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Light.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Light.woff)
      format('woff');
  font-weight: 200;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-DemiLight.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-DemiLight.woff)
      format('woff');
  font-weight: 300;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Regular.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Regular.woff)
      format('woff');
  font-weight: 400;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Medium.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Medium.woff)
      format('woff');
  font-weight: 500;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Bold.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Bold.woff)
      format('woff');
  font-weight: 700;
}
@font-face {
  font-family: SweiGothicCJKtc;
  src: url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Black.woff2)
      format('woff2'),
    url(https://cdn.jsdelivr.net/gh/max32002/swei-gothic@2.129/WebFont/CJK%20TC/SweiGothicCJKtc-Black.woff)
      format('woff');
  font-weight: 900;
}

:root {
  --kBgCard: #FFFFFF6D;
  --kBgInput: #FFFFFF9F;
  --kFgInput: #232323;

  --kBgLightGreen: #fafff5;
  --kBgLightBlue: #e8f9ff;
  --kBgLightYellow: #FEFFE3;
  --kBgLightPurple: #F4EBFF;

  --kBgSemiOpcBlack: #7777774A;
  --kBgSemiOpcRed: #ed3758a6;
}

/* -------------------- 字型 -------------------- */
html,
body {
  overflow-x: hidden;
  font-family: 'SweiGothicCJKtc', Helvetica, 'PingFang TC', '微軟正黑體',
    'Microsoft JhengHei', sans-serif !important;
  font-weight: 700;
  padding-right:0px !important;
  margin-right:0px !important;
}
.fw-900 { font-weight: 900 !important; }
.fw-700 { font-weight: 700 !important; }
.fw-500 { font-weight: 500 !important; }
.fw-400 { font-weight: 400 !important; }
.fw-300 { font-weight: 300 !important; }
.fw-200 { font-weight: 200 !important; }
.fw-100 { font-weight: 100 !important; }

/* -------------------- 背景色 -------------------- */
.bg-grad-color-A {
  background: url("~static/Screentone.png") round,
              -webkit-linear-gradient(to bottom left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -webkit-linear-gradient(to bottom, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              -moz-linear-gradient(to bottom left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -moz-linear-gradient(to bottom, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              -o-linear-gradient(to bottom left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -o-linear-gradient(to bottom, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              linear-gradient(to bottom left, var(--kBgLightYellow), var(--kBgLightPurple)),
              linear-gradient(to bottom, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
}
.bg-grad-color-B {
  background: url("~static/Screentone.png") round,
              -webkit-linear-gradient(to top left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -webkit-linear-gradient(to top, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              -moz-linear-gradient(to top left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -moz-linear-gradient(to top, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              -o-linear-gradient(to top left, var(--kBgLightYellow), var(--kBgLightPurple)),
              -o-linear-gradient(to top, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
  background: url("~static/Screentone.png") round,
              linear-gradient(to top left, var(--kBgLightYellow), var(--kBgLightPurple)),
              linear-gradient(to top, var(--kBgLightGreen), transparent, var(--kBgLightBlue));
}

/* -------------------- 其他設定 -------------------- */
main {
  min-height: calc(100vh - 95px);
}
.card {
  background: var(--kBgCard);
  border: none;
  border-radius: 20px;
}
.crown {
  margin-top: -5px;
  vertical-align:middle
}

/* -------------------- 淡入淡出動畫 -------------------- */
.flip-list-move {
  transition: all .25s;
}

/* -------------------- 輸入區樣式 -------------------- */
/* 輸入區底色 */
select, textarea, input, .custom-file-label{
	background-color: var(--kBgInput) !important;
	color: var(--kFgInput) !important;
  border: #EEEEEE 1px solid !important;
  border-radius: 10px !important;
  overflow-y: hidden !important;
}

/* Checkbox顏色 */
.checkbox-wrap > label {
  border: none;
  color: #787878 !important;
  background-color: var(--kBgSemiOpcBlack) !important;
}
.checkbox-wrap.active > label {
  color: #FFF !important;
  background-color: var(--kBgSemiOpcRed) !important;
}
</style>
