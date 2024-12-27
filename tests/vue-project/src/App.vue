<template>
  <div>
    <!-- 你好 -->
    <!-- <span>{{ $t("啊啊啊") }}</span>
    <span>{{ $t("啊啊") }}</span>
    <test :label="$t('哦哦')" :title="{ a: '啊啊' }"></test>
    <test :key="$t('哦哦1')" :title="{ a: '啊啊' }"></test>
    <test :key="$t('哦哦2')" :title="{ a: '啊啊' }"></test>
    <span>{{ $t("啊啊1") }}</span> -->

    <test :content="$t('请使用英文分隔')"> {{ $t("啊啊") }}</test>
    <test :content="'啊啊啊'"> {{ $t("啊啊") }}</test>

    <test content="请使用英文分号';'分隔"> {{ $t("的") }}</test>
    <test content="请使用英文分号';'分隔">阿斯顿撒</test>
    <test content="请使用英文分号';'分隔">阿斯顿撒</test>
    <test content="请使用英文分号';'分隔">阿斯顿撒</test>
    <test content="请使用英文分号分隔">阿斯顿撒</test>

    <test
      :key="$t('哦哦2')"
      :title="{
        a: $t('啊啊'),
      }"
      :content="$t('请使用英文分号\';\'分隔')"
    >
    </test>
    <test
      v-if="current === 0"
      :key="$t('大胆哇')"
      :title="{
        a: $t('啊啊'),
      }"
    >
    </test>
    <test
      v-else
      :key="$t('大胆')"
      :title="{
        a: $t('啊啊'),
      }"
      :placeholder="$t('请输入') + item"
    >
    </test>
    <test content="请使用英文分号';'分隔"> {{ a }}</test>
    <!-- <test content="示例：{&quot;ret&quot;:0}"></test> -->
    <a-form-item
      :label="
        modelRef.filterInputType === 5
          ? $t('结束时间偏移量(将来)')
          : $t('时间偏移量(将来)')
      "
      name="endTime"
    >
    </a-form-item>
  </div>
</template>

<script>
export default {
  components: {
    test,
  },
  data() {
    return {
      aaa: "你好",
      bb: {
        required: true,
        message: `${this.$t("账号名称不允许为空")}`,
        trigger: "submit",
      },
    };
  },
  computed: {},
  created() {},
  methods: {
    // a() {
    //   const b = "埋点事件id";
    //   const c = `埋点事件id：${rule.ruleId}`;
    //   return h("p", `埋点事件id：${rule.ruleId}`);
    // },
    aaaz() {
      reportBuriedPoint("bd_hll_datainsight_popup_click", {
        page_name: props.pageName,
        popup_name: `${a}${this.$t("_下载队列")}`,
        button_name: `${a}${this.$t("_下载队列_下载")}`,
      });
      return Promise.reject(this.$t("时间范围不能超过60天"));
    },
  },
};
</script>

<style lang="less" scoped>
.a {
  border: 1px solid;
}
</style>
