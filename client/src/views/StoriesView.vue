<template>
  <main class="about">
    <Header color="white">
      <template #button>
        get an invite
      </template>
    </Header>
    <div class="articlesList">
      <Article
        date="April 16th 2020"
        title="The Mountains"
        author="John Appleseed"
        class-name="article--image_theMountains"
      />
      <Article
        date="April 14th 2020"
        title="Sunset Cityscapes"
        author="Benjamin Cruz"
        class-name="article--image_sunsetCityscapes"
      />
      <Article
        date="April 11th 2020"
        title="18 Days Voyage"
        author="Alexei Borodin"
        class-name="article--image_18DaysVoyage"
      />
      <Article
        date="April 9th 2020"
        title="Architecturals"
        author="Samantha Brooke"
        class-name="article--image_architecturals"
      />
      <Article
        date="April 7th 2020"
        title="World Tour 2019"
        author="Timothy Wagner"
        class-name="article--image_worldTour2019"
      />
      <Article
        date="April 3rd 2020"
        title="Unforeseen"
        author="William Malcolm"
        class-name="article--image_unforeseen"
      />
      <Article
        date="March 29th 2020"
        title="King on Africa: Part II"
        author="Tim Hillenburg"
        class-name="article--image_kingonAfrica"
      />
      <Article
        date="March 21st 2020"
        title="The Trip to Nowhere"
        author="Felicia Rourke"
        class-name="article--image_theTriptoNowhere"
      />
      <Article
        date="March 19th 2020"
        title="Rage of the Sea"
        author="Mohammed Abdul"
        class-name="article--image_rageofTheSea"
      />
      <Article
        date="March 16th 2020"
        title="Running Free"
        author="Michelle"
        class-name="article--image_runningFree"
      />
      <Article
        date="March 11th 2020"
        title="Behind the Waves"
        author="Lamarr Wilson"
        class-name="article--image_behindTheWaves"
      />
      <Article
        date="March 9th 2020"
        title="Calm Waters"
        author="Samantha Brooke"
        class-name="article--image_calmWaters"
      />
      <Article
        date="March 5th 2020"
        title="The Milky Way"
        author="Benjamin Cruz"
        class-name="article--image_theMilkyWay"
      />
      <Article
        date="March 4th 2020"
        title="Night at The Dark Forest"
        author="Mohammed Abdul"
        class-name="article--image_nightAtTheDarkForest"
      />
      <Article
        date="March 1st 2020"
        title="Somwarpet's Beauty"
        author="Michelle"
        class-name="article--image_somwarpetsBeauty"
      />
      <Article
        date="February 25th 2020"
        title="Land of Dreams"
        author="William Malcolm"
        class-name="article--image_landofDreams"
      />
    </div>
  </main>
</template>

<script>
import Header from "@/components/stories/Header.vue";
import Article from "@/components/Article.vue";

export default {
  components: {
    Header,
    Article,
  },
};
</script>

<style lang="scss" scoped>
.stories {
  // height: 700px;
  // width: 80%;
  // background-color: pink;
  // margin: auto;
}
</style>
