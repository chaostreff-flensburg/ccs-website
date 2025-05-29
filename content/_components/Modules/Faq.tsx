import Detail from "../Layouts/Detail.tsx";

export default ({ text }) => (
  <section>
    <h2 class="text-center">{text.faq_title}</h2>
    <Detail title={text.faq_question1} content={text.faq_answer1} />
    <Detail title={text.faq_question2} content={text.faq_answer2} />
    <Detail title={text.faq_question3} content={text.faq_answer3} />
    <Detail title={text.faq_question4} content={text.faq_answer4} />
    <Detail title={text.faq_question5} content={text.faq_answer5} />
    <Detail title={text.faq_question6} content={text.faq_answer6} />
    <Detail title={text.faq_question7} content={text.faq_answer7} />
    <Detail title={text.faq_question8} content={text.faq_answer8} />
    <Detail title={text.faq_question9} content={text.faq_answer9} />
  </section>
);
