export default ({ text }) => (
  <section class="shadow header">
    <nav class="navbar">
      <a href="#headline">#CCS</a>
      <a href={text.header_about_the_advisory_board_link}>
        {text.header_about_the_advisory_board}
      </a>
      <a href={text.header_apply_link}>{text.header_apply}</a>
      <a href="#faq">F.A.Q.</a>
    </nav>
  </section>
);
