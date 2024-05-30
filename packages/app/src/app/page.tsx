'use client'

import {oppositeNUmber} from "@shared/core";
import {useEffect, useState} from "react";
import {adminConst} from "@apps/admin/src/app/page";
import Button from "@apps/admin/src/app/components/Button";
import {Nombre} from "@apps/admin/src/app/components/utils";

export default function Home() {
  const [ab, setAb] = useState<number>(0)

  useEffect(() => {
    setAb(Nombre)
  },[])

  return<>{Nombre}</>
}
