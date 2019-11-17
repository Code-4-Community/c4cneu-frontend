<template>
  <div>
    <section>
      <div class="parallax" id="plax_1">
        <h1>Executive Board</h1>
      </div>
    </section>
    <EboardPeople class="eboard" :eboard="eboard" />
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
          name: "Stephen Alt",
          linkedinLink: "https://www.linkedin.com/in/stephenalt/",
          email: "alt.s@husky.neu.edu",
          imageUrl: require("@/assets/Eboard/stephen_alt.jpg"),
          position: "President",
          bio:
            "Stephen Alt is a Junior studying Computer Science, Physics and Math. On co-op he has worked for IBM and IBM Research; he is extremely passionate about spreading knowledge, which can be seen through his work as a Computer Science TA, Physics Teaching Fellow, Khoury Teaching Fellow, and Instructor for Girls Who Code. A fun fact about Stephen is that he was born in Germany (sadly, he has forgotten how to speak German since then)."
        },

        {
          name: "Sadaf Khansalar",
          imageUrl: require("@/assets/Eboard/sadaf_khansalar.jpg"),
          linkedinLink: "https://www.linkedin.com/in/sadafkhansalar/",
          email: "khansalar.s@husky.neu.edu",
          position: "VP of Outreach and Mentorship",
          bio:
            "Sadaf Khansalar is a third year Computer Science and Music Technology student. She is passionate about inclusion in design which is why her focus in her research is inclusive design in music tech; she wants to create tools and technologies to enable a wider range of people to create and enjoy music. One of her hobbies is teaching which is why she is a Calculus Tutor and an Instructor for Girls Who Code. A fun fact about Sadaf is that her name means seashell in Persian."
        },

        {
          name: "Jack Blanc",
          linkedinLink: "https://www.linkedin.com/in/blancjack/",
          email: "blanc.ja@husky.neu.edu",
          imageUrl: require("@/assets/Eboard/jack_blanc.jpg"),
          position: "VP of Testing and Security",
          bio:
            "Jack Blanc is a third year student majoring in Computer Science and minoring in Business Administration. He’s completing his first co-op at Wayfair now, doing software engineering. Previously, he has volunteered with Google CS First, a program that teaches CS basics to elementary school students. A fun fact about Jack is that in high school, he brought his time to run a mile from 10:19 to 5:52!"
        },

        {
          name: "Reine Nisheiwat",
          linkedinLink: "https://www.linkedin.com/in/reinenish/",
          email: "nisheiwat.r@husky.neu.edu",
          imageUrl: require("@/assets/Eboard/reine_nisheiwat.jpg"),
          position: "VP of Design",
          bio:
            "Reine Nisheiwat is a junior studying a combined major in Business Administration and Design; with concentrations in Marketing, Management Information Systems, and Interactive and Experience Design (with a minor in Theatre!). She is dedicated to exploring ways that design can help individuals augment the expression of their ideas, and has had the opportunity to apply this interest in her recent co-op at IBM's Digital Workplace Engineering team. A fun fact about Reine is that she watched the Sun rise behind the Himalayan Mountains on hiking trip in Nepal."
        },

        {
          name: "Liam Moynihan",
          linkedinLink: "https://www.linkedin.com/in/liam-moynihan-b75806123/",
          email: "moynihan.li@husky.neu.edu",
          imageUrl: require("@/assets/Eboard/liam_moynihan.jpg"),
          position: "VP of Development",
          bio:
            "Liam Moynihan is  a 4th year Computer Engineering and Computer Science student. Liam has completed 2 software development co-ops in fintech and is passionate about helping the Boston community through his work with the Center for STEM, the City on the Hill School, and Community Servings. Liam is an avid NBA fan and loves going to Celtics games whenever he can!"
        },

        {
          name: "Jack Tonina",
          linkedinLink: "https://www.linkedin.com/in/jack-tonina-6328b9147/",
          email: "tonina.j@husky.neu.edu",
          imageUrl: require("@/assets/Eboard/jack_tonina.jpg"),
          position: "VP of Treasury",
          bio:
            "Jack is a third year student from Seattle, WA, studying finance and data science. This past semester he participated in a service learning class where he partnered with a lawyer from Liberia working on local land rights. He’s completing his first co-op, working at Wayfair for their Pricing and Profitability team. He also used to sing in a choir!"
        },

        {
          name: "Tina Noorani",
          linkedinLink: "https://www.linkedin.com/in/tinan415/",
          email: "noorani.t@husky.neu.edu",
          imageUrl: require("@/assets/Eboard/tina_noorani.jpg"),
          position: "Advisor",
          bio:
            "Tina Noorani is a 4th year studying Computer Science and Design. She has completed a Software Development co-op at Tamr inc. in Cambridge, MA. She is passionate about using the patterns and principles of computer science and design  to develop accessible technologies for those with different abilities. Tina is adamant on helping students stay in CS by supporting them as a Computer Science tutor and creating inclusion opportunities through her e-board role in MULTI, a club focused on diversity in the tech industry. Fun fact: Tina is a twin!"
        }
      ]
    };
  },
  //makes it so that when taken to page from router, it goes to the top
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
/*SETS BACKGROUND IMAGE OF HEADER*/
#plax_1 {
  background-image: url("../assets/p5.png");
}
</style>
