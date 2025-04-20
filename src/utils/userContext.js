import { createContext, useState } from "react";

const userContext=createContext({
    loggedInUser: "defaultUser"
}
)

export default userContext;