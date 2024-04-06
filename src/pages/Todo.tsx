import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";
import React from "react";

export default function Todo() {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold">My Todos</h1>
      <TodoContainer />
    </Container>
  );
}
