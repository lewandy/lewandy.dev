import React from 'react';

const TheHome = ({ children }: any) => <div>{children}</div>;

export default function Home() {
  return (
    <TheHome>
      <p>
        Hi, I am Lewandy Dilone - Software Engineer based on Dominican
        Republic!.
      </p>
    </TheHome>
  );
}
