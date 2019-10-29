import React from 'react';

export default () => (
  <div className="card1">
    {/* front of card */}
    <div className="front">Sid Koparde</div>

    {/* back of card */}
    <div className="back">Web Developer</div>

    <style jsx>
      {`

        .card1{
          position:relative;
          width:321px;
          height:208px;
          perspective: 500px;

          -webkit-transition: transform 0.75s; /* Safari and Chrome */
          transition: transform 0.75s;
          transform-style:preserve-3d;
        }

        .card1:hover .front {
          -ms-transform: rotateX(180deg) /* IE 9 */
          -webkit-transform: rotateX(180deg); /* Safari and Chrome */
          transform: rotateX(180deg);
        }

        .card1:hover .back {
          -ms-transform: rotateX(0deg) /* IE 9 */
          -webkit-transform: rotateX(0deg); /* Safari and Chrome */
          transform: rotateX(0deg);
        }

        .card1 .front, .card1 .back {
          position: absolute;
          height: 100%;
          width: 100%;
          border-radius: 10px;

          color: #fff;
          text-align: center;
          line-height: 208px;
          font-family: Helvetica;

          box-sizing: border-box;
          -webkit-transition: transform 0.75s ease-out; /* Safari and Chrome */
          transition: transform 0.75s ease-out;
          transform-style:preserve-3d;

          box-shadow: 0px 1.2vw 4vw -1vw rgba(0, 0, 0, 0.6);
          

        }

        .front{

          background-color: #CC3333;
          backface-visibility: hidden;

        }

        .back{

          background-color: #999999;
          backface-visibility: hidden;
          

          /* rotating the back face of the card1 */
          -ms-transform: rotateX(-180deg); /* IE 9 */
          -webkit-transform: rotateX(-180deg); /* Safari */
          transform: rotateX(-180deg);
        }
      `}
    </style>
  </div>
);
