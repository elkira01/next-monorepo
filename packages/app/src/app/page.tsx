'use client'

import {SubmitButton} from "@shared/core/src/ui/common";

export default function Home() {

  return<main className="container p-10 flex justify-center">
    <SubmitButton label="APP SITE CLICK ME !!" onClick={() => console.log("Clicked !!!")}/>
  </main>
}
