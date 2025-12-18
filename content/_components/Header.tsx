export default (props) => (
  <section class="shadow header">
    <nav class="navbar">
      <a href="#headline" class="active">
        {props.startpage}
      </a>
      <a href={`/${props.header_apply_link}`}>{props.header_apply}</a>
       <a href="/about/">Über uns</a>
      <a href="/team/">Team</a>
      <a href="/blog/page/1/">Blog</a>
      <a href="/publication/page/1/">{props.header_publication}</a>
    </nav>
  </section>
);
