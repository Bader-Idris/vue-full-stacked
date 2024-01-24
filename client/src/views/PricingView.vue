<template>
  <main class="pricing">
    <ArticleTicket
      color=""
      classNameImage="pricing--image_hero"
      classNameArticleTicket="articleTicket--principal"
    >
      <template v-slot:title>Pricing</template>
      <template v-slot:paragraphe
        >Create a your stories, Photosnap is a platform for photographers and
        visual storytellers. It’s the simple way to create and share your
        photos.</template
      >
    </ArticleTicket>
    <div class="pricing--switch">
      <p :class="{ isChecked: !checked }">Monthly</p>
      <label class="switch">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <span class="slider"></span>
      </label>
      <p :class="{ isChecked: checked }">Yearly</p>
    </div>
    <div class="pricing--cards">
      <Card
        title="Basic"
        paragraph="Includes basic usage of our platform. Recommended for new and aspiring photographers."
        :price="checked !== true ? '19.00' : '190.00'"
        :period="checked !== true ? 'month' : 'year'"
        className="card--normal"
      />
      <Card
        title="Pro"
        paragraph="More advanced features available. Recommended for photography veterans and professionals."
        :price="checked !== true ? '39.00' : '390.00'"
        :period="checked !== true ? 'month' : 'year'"
        className="card--pro"
      />
      <Card
        title="Business"
        paragraph="Additional features available such as more detailed metrics. Recommended for business owners."
        :price="checked !== true ? '99.00' : '990.00'"
        :period="checked !== true ? 'month' : 'year'"
        className="card--normal"
      />
    </div>
    <div class="pricing--cardsTablet">
      <CardTablet
        title="Basic"
        paragraph="Includes basic usage of our platform. Recommended for new and aspiring photographers."
        :price="checked !== true ? '19.00' : '190.00'"
        :period="checked !== true ? 'month' : 'year'"
        className="cardTablet--normal"
      />
      <CardTablet
        title="Pro"
        paragraph="More advanced features available. Recommended for photography veterans and professionals."
        :price="checked !== true ? '39.00' : '390.00'"
        :period="checked !== true ? 'month' : 'year'"
        className="cardTablet--pro"
      />
      <CardTablet
        title="Business"
        paragraph="Additional features available such as more detailed metrics. Recommended for business owners."
        :price="checked !== true ? '99.00' : '990.00'"
        :period="checked !== true ? 'month' : 'year'"
        className="cardTablet--normal"
      />
    </div>
    <h2 class="h2-large pricing--title">Compare</h2>
    <TableCompare />
    <TableCompareMobile />
    <BannerFooter />
  </main>
</template>

<script>
import ArticleTicket from "@/components/home/ArticleTicket.vue";
import Card from "@/components/Card.vue";
import CardTablet from "@/components/CardTablet.vue";
import TableCompare from "@/components/TableCompare.vue";
import TableCompareMobile from "@/components/TableCompareMobile.vue";
import BannerFooter from "@/components/BannerFooter.vue";

export default {
  name: "Home",
  data() {
    return {
      checked: false,
    };
  },
  components: {
    ArticleTicket,
    Card,
    BannerFooter,
    TableCompare,
    CardTablet,
    TableCompareMobile,
  },
};
</script>

<style lang="scss" scoped>
// .pricing {
//   height: 700px;
//   width: 80%;
//   background-color: rgba(6, 6, 29, 0.87);
//   margin: auto;
// }
</style>
