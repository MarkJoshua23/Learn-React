import ButtonGradient from "../assets/svg/ButtonGradient";
import ButtonSvg from "../assets/svg/ButtonSvg";

//props received
const Button = ({ className, href, onClick, children, px, white }) => {
  //if theres FLEX there should be items-....
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  //relative - IMPORTANT!!! so that the children can refer to it using absolute
  //${px || 'px-7'} - get px from props, if theres no props then default px-7 (padding)
  //${white ? 'text-n-8':'text-n-1'} - if white is TRUE then 'text-n-8'
  //${className || ""} - IMPORTANT!!!! to get the tailwind classes from the component

  const spanClasses = "relative z-10";

  //use if you want to render BUTTON
  //instant return use () not {}
  //children is whats inside <>'here'</>
  //get ButtonSvg component
  const RenderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}> {children}</span>

      {ButtonSvg(white)}
      <ButtonGradient />
    </button>
  );

  //use if you want to render LINK
  const RenderLink = () => (
    <a href={href} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
      <ButtonGradient />
    </a>
  );

  //if theres href then return renderlink or else renderbutton
  return href ? RenderLink() : RenderButton();
};

export default Button;
