import React from 'react';

import { ProtectedRoute } from '../utils'
import { HomePage } from "../../components";
import { RouteProps } from "react-router";

export const HomePageRoute: React.FC<RouteProps> = (props: RouteProps) => {
    // console.log(props)
    // props.element = <HomePage/>;
    return <ProtectedRoute {...props} path={ "home" } element={ <HomePage/> }/>
}