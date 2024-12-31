import { Question } from "@/src/components/Question";
import { getAllQuestions } from "@/src/lib/actions/getAllQuestion";

import React from "react";

const page = async () => {
  // const { clerId } = auth();

  // const clerId = "676d451ba2d55aae7ea8c4b7";
  // if (!clerId) return;

  // const userId = await getUserById(clerId);
  // console.log(userId);

  try {
    const res = await getAllQuestions();
    const question = await res;
    console.log(question);
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="page-container flex-1 flex flex-col">
      <div>
        <h1 className="h1-bold">Question</h1>
      </div>
      <div>
        <Question />
      </div>
    </div>
  );
};

export default page;