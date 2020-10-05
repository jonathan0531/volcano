<template>
  <div id="container">
    <h1 id="h1">{{message}}</h1>
    <hr />
    <h2>{{question}}</h2>
    <a
      href="https://www.google.com/search?client=firefox-b-1-d&sxsrf=ALeKk02_7h4QzcoyxgRNxD5HLb6j3zzY7w%3A1587762988556&source=hp&ei=LFejXqfzHtLWtAar3KLQAg&q=%22volcanic+skydiving+web+application%22&oq=&gs_lcp=CgZwc3ktYWIQARgIMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnMgcIIxDqAhAnUABYAGD3ImgCcAB4AIABAIgBAJIBAJgBAKoBB2d3cy13aXqwAQo&sclient=psy-ab"
    >"Volcanic Skydiving Web Application" Google Search</a>
    <h2>{{firstQuestion}}</h2>
    <h5>{{firstAnswer}}</h5>
    <h2>{{secondQuestion}}</h2>
    <h5>{{firstSource}}</h5>
    <h5>{{secondSource}}</h5>
    <h5>{{thirdSource}}</h5>
    <h5>{{secondAnswer}}</h5>
    <h2>{{thirdQuestion}}</h2>
    <h5>{{thirdAnswer}}</h5>
    <h2>{{fourthQuestion}}</h2>
    <h5>{{fourthAnswer}}</h5>
    <h2>{{fifthQuestion}}</h2>
    <h5>{{fifthAnswer}}</h5>
    <h2>{{questionSix}}</h2>
    <h5>{{answerSix}}</h5>
    <h2>{{questionSeven}}</h2>
    <h5>{{answerSeven}}</h5>
    <h2>{{questionEight}}</h2>
    <h5>{{answerEight}}</h5>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      message: "Frequently Asked Questions",
      question: "Proof that my idea is unique by doing Google search",
      firstQuestion: "Where is the business justification?",
      firstAnswer:
        "The business case is introduced in the first page. The youtube video should help make a strong statement that it could potentially be a profitable business. I also attached a brochure.",
      secondQuestion: "Where are the sources?",
      firstSource:
        "Full-Stack Web Development with Vue.js and Node By Aneeta Sharma",
      secondSource:
        "For creating API's and axios calls: https://github.com/anaida07/MEVN-boilerplate",
      thirdSource: "Professors Amirpanahi's Lectures and Powerpoints",
      thirdQuestion: "Where do you add a volcano?",
      thirdAnswer:
        "Once the users logs in, They will be redirected to the homepage where they can access it.",
      fourthQuestion: "How do you edit a volcano?",
      fourthAnswer:
        "On the homepage, each volcano destination has a 'select' button. On the volcano details page, you click the begin 'edit button' that will show three buttons. You make the changes you want and simply click the 'update' button.",
      fifthQuestion: "How do you delete a volcano?",
      fifthAnswer:
        "On the volcano details page, you click the 'begin edit' button that will show three buttons. You click the 'delete' button and it will automatically delete the volcano.",
      questionSix: "Why did you not separate view from components?",
      answerSix:
        "I went with the structure in the full stack web development book and found it easier and more convinient.",
      questionSeven: "What is the skydiving altitude?",
      answerSeven:
        "Around 13,000 ft, giving the member about 60 seconds of free fall from the moment they exit the plane.",
      questionEight: "Is food and other anemties included in price?",
      answerEight:
        "No, we only include the price for boarding the plane and using our world class equipment."
    };
  }
};
</script>

<style scoped>
#container {
  margin: 10px;
}
h2 {
  margin-top: 30px;
}
</style>