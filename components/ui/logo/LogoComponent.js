import Image from "next/image";
import { useEffect, useState } from "react";

function LogoComponent(props) {

  return (
    <div>
       <Image src={props.imgSrc} width={100} height={50}  alt="logo_brand"/>
    </div>
  )
}

export default LogoComponent