import React from "react";
import "./float-action-button.css";

export default function FloatActionButton(event) {
  const [activeState, setActiveState] = React.useState(false);

  React.useEffect(() => {
    const lists = document.querySelectorAll(
      ".float-action-button>.menu__container>li"
    );
    for (var i = 0; i < lists.length; i++) {
      if (activeState) {
      }
      let x = (i * 360) / lists.length + 18;
      let left = parseFloat(5 * Math.cos((x / 180) * 3.14)).toFixed(2);
      let toP = parseFloat(5 * Math.sin((x / 180) * 3.14)).toFixed(2);
      lists[i].style.translate = `${left}rem ${toP}rem`;
    }

    return () => {
      for (var i = 0; i < lists.length; i++) {
        if (activeState) {
          lists[i].style.translate = `0rem 0rem`;
        }
      }
    };
  });

  function actionButtonClicked(event) {
    alert(lists.length);
    setActiveState(activeState ? false : true);
    event.target.style.rotate = activeState ? "" : "72deg";
  }

  return (
    <div className="float-action-button">
      <ul className="menu__container" onClick={actionButtonClicked}>
        {activeState && (
          <React.Fragment>
            <li>
              <i className="fa-solid fa-bell"></i>
            </li>
            <li>
              <i className="fa-solid fa-home"></i>
            </li>
            <li>
              <i className="fa-solid fa-video"></i>
            </li>
            <li>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-snapchat" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-telegram" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
}

// <body>

// 	<script>

// 	</script>
// 	<script type="text/javascript" src="https://kit.fontawesome.com/b8f95d3b4f.js"></script>
// </body>
// </html>
