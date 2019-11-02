<template>
  <div></div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {
      eboard: [
        {
          name: "Stephen Alt (aka Dad)",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5cc8aa8aa56827229e17102f/1563820011616-6VM6R2EDI4971ZQALKDH/ke17ZwdGBToddI8pDm48kL6g3qW650QTPYKk4n-6J7F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URV9RdLHY3PB4_BtPFaaMqlRVQRDdRMUZM7YW4cG2XqQJrp0Q3qRhvCXOPRnHq6klQ/DSCF9674.jpg?format=1000w",
          position: "President",
          bio:
            "Stephen Alt is a Junior studying Computer Science, Physics and Math. On co-op he has worked for IBM and IBM Research; he is extremely passionate about spreading knowledge, which can be seen through his work as a Computer Science TA, Physics Teaching Fellow, Khoury Teaching Fellow, and Instructor for Girls Who Code. A fun fact about Stephen is that he was born in Germany (sadly, he has forgotten how to speak German since then)."
        },

        {
          name: "Sadaf Khansalar",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5cc8aa8aa56827229e17102f/1563827386636-54RFI0ZUOZU77V2GBRY9/ke17ZwdGBToddI8pDm48kAjOT20pY87ZFwO0TWHhJT8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc2oaEyd4rzD7GceB2XZPA-7cD1vubDvvx8fUWf4L-wZ8FRc5hv_h4rhbESBKCR49a/AirBrush_20190723004954.jpg?format=1000w",
          position: "VP of Outreach and Mentorship",
          bio:
            "Sadaf Khansalar is a third year Computer Science and Music Technology student. She is passionate about inclusion in design which is why her focus in her research is inclusive design in music tech; she wants to create tools and technologies to enable a wider range of people to create and enjoy music. One of her hobbies is teaching which is why she is a Calculus Tutor and an Instructor for Girls Who Code. A fun fact about Sadaf is that her name means seashell in Persian."
        },

        {
          name: "Jack Blanc (aka Hypebeast",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5cc8aa8aa56827229e17102f/1563819264399-NBZGWOU7LB8368UBWLK1/ke17ZwdGBToddI8pDm48kLH3xzpqmRgsJ2t4_oEh3jB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UciHRbEQRreBFW82QJPqbzQTUcK1oiFx5jCt9vz3t5Z_mw4iU1foAOIoZERIkCQahw/DSCF9652.jpg?format=1000w",
          position: "VP of Testing and Security",
          bio:
            "Jack Blanc is a third year student majoring in Computer Science and minoring in Business Administration. He’s completing his first co-op at Wayfair now, doing software engineering. Previously, he has volunteered with Google CS First, a program that teaches CS basics to elementary school students. A fun fact about Jack is that in high school, he brought his time to run a mile from 10:19 to 5:52!"
        },

        {
          name: "Reine Nisheiwat",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5cc8aa8aa56827229e17102f/1565047432752-JY7RHJYXJIQ52WX1W08W/ke17ZwdGBToddI8pDm48kGtXuFDT4NkG_9fjQeCH_pN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmjJyaSXAwc_BJvYKv4pjNuvnzVK090fMOy4RQx3qVrEqbJhMdLiwJzjhKn9KTQ53G/DSCF9687.jpg?format=1000w",
          position: "VP of Design",
          bio:
            "Reine Nisheiwat is a junior studying a combined major in Business Administration and Design; with concentrations in Marketing, Management Information Systems, and Interactive and Experience Design (with a minor in Theatre!). She is dedicated to exploring ways that design can help individuals augment the expression of their ideas, and has had the opportunity to apply this interest in her recent co-op at IBM's Digital Workplace Engineering team. A fun fact about Reine is that she watched the Sun rise behind the Himalayan Mountains on hiking trip in Nepal."
        },

        {
          name: "Liam Moynihan",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5cc8aa8aa56827229e17102f/1565446328070-AC1AWWBU4A8JJT8WSNA0/ke17ZwdGBToddI8pDm48kGJPosOZKJ_5bTt_aoKLXvV7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmNFveLtSPA03JKuAUT-dZqwJV8FnXNGQaVncx9USDrNgcMbtXmoAD8lK8prOoj7G9/DSCF9698-2.jpg?format=1000w",
          position: "VP of Development",
          bio:
            "Liam Moynihan is  a 4th year Computer Engineering and Computer Science student. Liam has completed 2 software development co-ops in fintech and is passionate about helping the Boston community through his work with the Center for STEM, the City on the Hill School, and Community Servings. Liam is an avid NBA fan and loves going to Celtics games whenever he can!"
        },

        {
          name: "Jack Tonina",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5cc8aa8aa56827229e17102f/1565047300632-UK4K2786ARSIP5T9W5LH/ke17ZwdGBToddI8pDm48kJp-gtyjzbDVzNqhAIMWXy17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmHHRMqniMJbuwH8EZRFFu5TfW0mbELnBI9SvoYxR2JhyEEvG8KWEWIHXBOwv2q3PN/DSCF9615.jpg?format=1000w",
          position: "VP of Treasury",
          bio:
            "Jack is a third year student from Seattle, WA, studying finance and data science. This past semester he participated in a service learning class where he partnered with a lawyer from Liberia working on local land rights. He’s completing his first co-op, working at Wayfair for their Pricing and Profitability team. He also used to sing in a choir!"
        },

        {
          name: "Tina Noorani",
          imageUrl:
            "https://images.squarespace-cdn.com/content/v1/5cc8aa8aa56827229e17102f/1565047194574-EEZC4UPUPYGYDT30917Z/ke17ZwdGBToddI8pDm48kGCq0pDz9vq1NlM1Ll1JZh97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbtxuNZrOmrbpKcL6L1xkQtKHCFh5eI8wcwigiWYuQJyMRTBeoc2janXeSQRP-ELbQ/DSCF9669.jpg?format=1000w",
          position: "Advisor",
          bio:
            "Tina Noorani is a 4th year studying Computer Science and Design. She has completed a Software Development co-op at Tamr inc. in Cambridge, MA. She is passionate about using the patterns and principles of computer science and design  to develop accessible technologies for those with different abilities. Tina is adamant on helping students stay in CS by supporting them as a Computer Science tutor and creating inclusion opportunities through her e-board role in MULTI, a club focused on diversity in the tech industry. Fun fact: Tina is a twin!"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
