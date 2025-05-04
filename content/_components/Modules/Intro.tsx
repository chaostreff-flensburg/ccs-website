export default ({ ...props }) => (
  <>
    <h1 class="text-center" id="headline">
      {props.text.intro_title}
    </h1>
    <p class="text-center">{props.text.intro_text}</p>
  </>
);
