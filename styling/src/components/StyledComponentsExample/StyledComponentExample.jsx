import React, { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
//   color: blue;

//   &:hover {
//     color: red; // <Thing> when hovered
//   }

//   & ~ & {
//     background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
//   }

//   & + & {
//     background: lime; // <Thing> next to <Thing>
//   }

//   &.something {
//     background: orange; // <Thing> tagged with an additional CSS class ".something"
//   }

//   .something-else & {
//     border: 1px solid; // <Thing> inside another element labeled ".something-else"
//   }
// `;

// const Input = styled.input.attrs((props) => ({
//   type: "text",
//   size: props.size || "1em",
// }))`
//   border: 2px solid palevioletred;
//   margin: ${(props) => props.size};
//   padding: ${(props) => props.size};
// `;

// // Input's attrs will be applied first, and then this attrs obj
// const PasswordInput = styled(Input).attrs({
//   type: "password",
// })`
//   // similarly, border will override Input's border
//   border: 2px solid aqua;
// `;
// // Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// const Button = styled.button`
//   /* Adapt the colors based on primary prop */
//   background: ${(props) => (props.primary ? "palevioletred" : "white")};
//   color: ${(props) => (props.primary ? "white" : "palevioletred")};

//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// // Use Title and Wrapper like any other React component – except they're styled!

// // A new component based on Button, but with some override styles
// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;

// const ReversedButton = (props) => (
//   <Button {...props} children={props.children.split("").reverse()} />
// );

// // Create the keyframes
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred",
    borderColor: "blue",
  },
};

// Define what props.theme will look like
// const theme = {
//   main: "mediumseagreen",
//   borderColor: "pink",
// };
const defaultTheme = {
  color: "green",
  backgroundColor: "green",
};
const redTheme = {
  color: "red",
  borderColor: "red",
};

const GlobalStyle = createGlobalStyle`
  button {
    background-color: pink
  }
`;

export default function StyledComponentExample() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <>
      <div>
        <GlobalStyle />

        <button onClick={() => setTheme(redTheme)}>red</button>
        <button onClick={() => setTheme(defaultTheme)}>green</button>
        <ThemeProvider theme={theme}>
          <Button>Normal</Button>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
      <button>other</button>
      {/* <Rotate>&lt; 💅🏾 &gt;</Rotate> */}
      {/* <div>
        <Input placeholder="A bigger text input" size="2em" />
        <br />
        <PasswordInput placeholder="A bigger password input" size="2em" />
      </div> */}
      {/* <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div> */}
      {/* <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Button onClick={() => alert("normal")}>Normal</Button>
      <Button onClick={() => alert("primary")} primary>
        Primary
      </Button>
      <TomatoButton>Tomato</TomatoButton>
      <br />
      <Button as="a" href="#">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="#">
        Link with Tomato Button styles
      </TomatoButton>
      <br /> */}
      {/* as에 컴포넌트를 추가해 확장 가능 */}
      {/* <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button> */}
    </>
  );
}
