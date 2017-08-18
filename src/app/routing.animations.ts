import {AnimationMetadata, group, query, transition, trigger, useAnimation} from "@angular/animations";
import {slideFromLeft, slideFromRight, slideToLeft, slideToRight} from "./core/animations/slide-animations";

/**
 * Created by AKuzmanoski on 13/08/2017.
 */
export const routerAnimations: AnimationMetadata = trigger('routerAnimations', [
  transition('account => register',
    group([
      query(":enter", useAnimation(slideFromRight, {params: {translate: "100%"}}), {optional: true}),
      query(":leave", useAnimation(slideToLeft, {params: {translate: "100%"}}), {optional: true})
    ])),
  transition('register => account', group([
    query(":enter", useAnimation(slideFromLeft, {params: {translate: "100%"}}), {optional: true}),
    query(":leave", useAnimation(slideToRight, {params: {translate: "100%"}}), {optional: true})
  ])),
  transition('account => login', group([
    query(":enter", useAnimation(slideFromRight, {params: {translate: "100%"}}), {optional: true}),
    query(":leave", useAnimation(slideToLeft, {params: {translate: "100%"}}), {optional: true})
  ])),
  transition('login => account', group([
    query(":enter", useAnimation(slideFromLeft, {params: {translate: "100%"}}), {optional: true}),
    query(":leave", useAnimation(slideToRight, {params: {translate: "100%"}}), {optional: true})
  ])),
]);
