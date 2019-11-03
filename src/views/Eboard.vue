<template>
  <div>
    <h1>The Eboard</h1>

    <EboardPeople v-bind:eboard="eboard" />
  </div>
</template>

<script>
import EboardPeople from "../components/EboardPeople";

export default {
  name: "eboard",
  components: {
    EboardPeople
  },
  data() {
    return {
      eboard: [
        {
          name: "Stephen Alt (aka Dad)",
          imageUrl: "../assets/Eboard/stephen_alt.jpg",
          position: "President",
          bio:
            "Stephen Alt is a Junior studying Computer Science, Physics and Math. On co-op he has worked for IBM and IBM Research; he is extremely passionate about spreading knowledge, which can be seen through his work as a Computer Science TA, Physics Teaching Fellow, Khoury Teaching Fellow, and Instructor for Girls Who Code. A fun fact about Stephen is that he was born in Germany (sadly, he has forgotten how to speak German since then)."
        },

        {
          name: "Sadaf Khansalar",
          imageUrl: "../assets/Eboard/sadaf_khansalar.jpg",
          position: "VP of Outreach and Mentorship",
          bio:
            "Sadaf Khansalar is a third year Computer Science and Music Technology student. She is passionate about inclusion in design which is why her focus in her research is inclusive design in music tech; she wants to create tools and technologies to enable a wider range of people to create and enjoy music. One of her hobbies is teaching which is why she is a Calculus Tutor and an Instructor for Girls Who Code. A fun fact about Sadaf is that her name means seashell in Persian."
        },

        {
          name: "Jack Blanc (aka Hypebeast",
          imageUrl: "../assets/Eboard/jack_blanc.jpg",
          position: "VP of Testing and Security",
          bio:
            "Jack Blanc is a third year student majoring in Computer Science and minoring in Business Administration. He’s completing his first co-op at Wayfair now, doing software engineering. Previously, he has volunteered with Google CS First, a program that teaches CS basics to elementary school students. A fun fact about Jack is that in high school, he brought his time to run a mile from 10:19 to 5:52!"
        },

        {
          name: "Reine Nisheiwat",
          imageUrl: "../assets/Eboard/reine_nisheiwat.jpg",
          position: "VP of Design",
          bio:
            "Reine Nisheiwat is a junior studying a combined major in Business Administration and Design; with concentrations in Marketing, Management Information Systems, and Interactive and Experience Design (with a minor in Theatre!). She is dedicated to exploring ways that design can help individuals augment the expression of their ideas, and has had the opportunity to apply this interest in her recent co-op at IBM's Digital Workplace Engineering team. A fun fact about Reine is that she watched the Sun rise behind the Himalayan Mountains on hiking trip in Nepal."
        },

        {
          name: "Liam Moynihan",
          imageUrl: "../assets/Eboard/liam_moynihan.jpg",
          position: "VP of Development",
          bio:
            "Liam Moynihan is  a 4th year Computer Engineering and Computer Science student. Liam has completed 2 software development co-ops in fintech and is passionate about helping the Boston community through his work with the Center for STEM, the City on the Hill School, and Community Servings. Liam is an avid NBA fan and loves going to Celtics games whenever he can!"
        },

        {
          name: "Jack Tonina",
          imageUrl: "../assets/Eboard/jack_tonina.jpg",
          position: "VP of Treasury",
          bio:
            "Jack is a third year student from Seattle, WA, studying finance and data science. This past semester he participated in a service learning class where he partnered with a lawyer from Liberia working on local land rights. He’s completing his first co-op, working at Wayfair for their Pricing and Profitability team. He also used to sing in a choir!"
        },

        {
          name: "Tina Noorani",
          imageUrl: "../assets/Eboard/tina_noorani.jpg",
          position: "Advisor",
          bio:
            "Tina Noorani is a 4th year studying Computer Science and Design. She has completed a Software Development co-op at Tamr inc. in Cambridge, MA. She is passionate about using the patterns and principles of computer science and design  to develop accessible technologies for those with different abilities. Tina is adamant on helping students stay in CS by supporting them as a Computer Science tutor and creating inclusion opportunities through her e-board role in MULTI, a club focused on diversity in the tech industry. Fun fact: Tina is a twin!"
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css?family=Merriweather:400,700&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: white;
  padding: 20px;
  margin: 0;
}
h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 128px;
  font-weight: 600;
  line-height: 120px;
  letter-spacing: -4px;
  color: white;
  padding: 20px;
  margin: 0;
}
h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: white;
  padding: 20px;
  margin: 0;
}
p {
  font-family: "Merriweather", serif;
  font-weight: 400;
  color: white;
  font-size: 16px;
  line-height: 32px;
  margin-right: 15%;
  margin-left: 15%;
}
pb {
  font-family: "Merriweather", serif;
  font-weight: 700;
  color: white;
  font-size: 16px;
  line-height: 32px;
}
@media only screen and (max-width: 768px) {
  h2 {
    font-size: 48px;
    letter-spacing: 0px;
  }
  p {
    margin-right: 2vh;
    margin-left: 2vh;
  }
}
@media only screen and (min-width: 769px) {
}
</style>
