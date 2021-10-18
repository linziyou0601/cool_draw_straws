<template>
  <div id="app">
    <!-- 標題區 -->
    <header ref="header" class="bg-grad-color-A text-center py-4">
      <h2 class="fw-900">看起來蝦趴一點的抽籤程式</h2>
    </header>

    <!-- 主內容區 -->
    <main class="container-fluid p-0 p-md-2 p-lg-5 bg-grad-color-B">
      <section class="p-0 p-md-2 mb-3">
        <h3 class="fw-700">抽籤結果</h3>
        <b-card class="mt-2 p-3">
          <b-row>
            <b-col v-for="(item, ind) in candidates" :key="ind" cols="12" class="mb-3">
              <h6 style="line-height:35px;">
                <b-img v-if="item.crown" src="icons8_queen_crown_48px.png" class="crown" width="35" />&emsp;
                {{ item.key }}&emsp;
                （{{(item.value/max_votes*100).toFixed(2)}}%）
              </h6>
              <b-progress :max="max_votes" show-value show-progress animated>
                <b-progress-bar :value="item.value" :label="`${item.value}`"/>
              </b-progress>
            </b-col>
          </b-row>
          <b-row v-if="candidates.length>0" class="px-3 mt-3">
            <h5 class="mx-auto" style="line-height:35px;">已抽出：{{ sum_votes }}／總數：{{ max_votes }}</h5>
          </b-row>
        </b-card>
      </section>

      <section class="p-0 p-md-2 mb-3">
        <h3 class="fw-700">抽籤設定</h3>
        <b-card class="mt-2 p-3">
          <b-row>
            <b-col cols="12" class="mb-3">
              <h6>要抽幾位</h6>
              <b-form-input v-model="nums" type="number" min="1"></b-form-input>
            </b-col>

            <b-col cols="12" class="mb-3">
              <h6>抽籤項目</h6>
              <b-form-textarea v-model="item_str" placeholder="請輸入抽籤項目（以半形逗號「,」分隔）" rows="6" max-rows="20" />
            </b-col>

            <b-col cols="12" class="mb-3">
              <h6>總抽出次數</h6>
              <b-form-input v-model="total_votes" type="number" min="1" max="100000000"></b-form-input>
            </b-col>

            <b-col cols="12" class="mb-3">
              <h6>每幾秒抽一次（單位：ms）</h6>
              <b-form-input v-model="intv" type="number" min="1"></b-form-input>
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

    <AlertDialog />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nums: 1,
      item_str: '',
      total_votes: 100,
      intv: 200,

      max_votes: 0,
      sum_votes: 0,
      candidates: [],
      interval_id: null,
    }
  },
  computed: {
    sortedCandidates() {
      const sortedCandidates = [...this.candidates]
      sortedCandidates.sort((a, b) => b.value - a.value)
      return sortedCandidates
    }
  },
  methods: {
    doClear() {
      // 清空原值
      this.max_votes = 0
      this.sum_votes = 0
      this.candidates = []
      // 清空interval
      if (this.interval_id!==null) clearInterval(this.interval_id)
      this.interval_id = null
    },
    doDraw() {
      // 清空原值
      this.doClear()
      // 設定新值
      this.max_votes = this.total_votes
      const items = Array.from(new Set(this.item_str.split(",")))
      for (const item of items) this.candidates.push({ key: item, value: 0, crown: false })
      // 滑到頂部
      this.scrollToTop()
      // 設定interval
      this.interval_id = setInterval(this.drawOne, this.intv);
    },
    drawOne() {
      // 抽出
      const rnd = Math.floor(Math.random() * this.candidates.length);
      this.candidates[rnd].value += 1
      this.sum_votes += 1
      // 若已抽完
      if (this.sum_votes >= this.max_votes) {
        // 清空interval
        clearInterval(this.interval_id)
        this.interval_id = null
        // 計算票多者
        const crownKeys = this.sortedCandidates.slice(0, this.nums).map((obj) => obj.key)
        for (const candidate of this.candidates)
          if (crownKeys.includes(candidate.key))
            candidate.crown = true
      }
      // 還沒抽完但已過半
      else if (this.candidates[rnd].value > this.max_votes/2) {
        this.candidates[rnd].crown = true
      }
    },
    scrollToTop() {
      const el = this.$refs.header;
      if (el) el.scrollIntoView({behavior: 'smooth'});
    },
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
  --kBlue: #287fff;
  --kBlue60: #287fffa6;
  --kPurple: #7868e6;
  --kPurple60: #7868e6a6;
  --kRed: #ed3758;
  --kRed60: #ed3758a6;
  --kGreen: #7dbd39;
  --kGreen60: #7dbd39a6;
  --kBlack: #2e3846;
  --kLightBlack: #516272;
  --kBgLightGreen: #fafff5;
  --kBgLightBlue: #e8f9ff;
  --kBgLightYellow: #FEFFE3;
  --kBgLightPurple: #F4EBFF;
  --kWhite30: #ffffff4d;
  --kLight: #ebebeb;
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
  background: #FFFFFF6D;
  border: none;
  border-radius: 20px;
}
.crown {
  margin-top: -5px;
  vertical-align:middle
}

/* -------------------- 輸入區樣式 -------------------- */
/* 輸入區底色 */
select, textarea, input, .custom-file-label{
	background-color: #FFFFFF9F !important;
	color: #232323 !important;
  border: #EEEEEE 1px solid !important;
  border-radius: 10px !important;
  overflow-y: hidden !important;
}
</style>
