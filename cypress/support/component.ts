import "./commands";
import type { MountOptions, MountReturn } from "cypress/react";
import type {
  HeroProperty,
  VillainProperty,
  EntityType,
  EntityRoute,
} from "../../static/react/data/types";
import type { Hero } from "../../static/react/data/Hero";
import type { Villain } from "../../static/react/data/Villain";
import type { Boy } from "../../static/react/data/Boy";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComp from "../../static/react/components/ErrorComp";
import PageSpinner from "../../static/react/components/PageSpinner";
import { Suspense } from "react";
import "../../node_modules/bootstrap/scss/bootstrap.scss";
import "../../assets/scss/_custom-styles.scss";

declare global {
  namespace Cypress {
    interface Chainable {
      /** Yields elements with a data-cy attribute that matches a specified selector.
       * ```
       * cy.getByCy('search-toggle') // where the selector is [data-cy="search-toggle"]
       * ```
       */
      getByCy(qaSelector: string, args?: any): Chainable<JQuery<HTMLElement>>;

      /** Yields elements with data-cy attribute that partially matches a specified selector.
       * ```
       * cy.getByCyLike('chat-button') // where the selector is [data-cy="chat-button-start-a-new-claim"]
       * ```
       */
      getByCyLike(
        qaSelector: string,
        args?: any
      ): Chainable<JQuery<HTMLElement>>;

      /** Yields the element that partially matches the css class
       * ```
       * cy.getByClassLike('StyledIconBase') // where the class is class="StyledIconBase-ea9ulj-0 lbJwfL"
       * ```
       */
      getByClassLike(
        qaSelector: string,
        args?: any
      ): Chainable<JQuery<HTMLElement>>;

      /** Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions
      ): Cypress.Chainable<MountReturn>;

      /** Mounts the component wrapped by all the providers:
       * QueryClientProvider, ErrorBoundary, Suspense, BrowserRouter
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      wrappedMount(
        component: React.ReactNode,
        options?: MountOptions
      ): Cypress.Chainable<MountReturn>;

      /** Visits heroes or villains routes, uses real network, verifies path */
      visitEntities(entityRoute: EntityRoute): Cypress.Chainable<string>;

      /** Visits heroes or villains routes, uses stubbed network, verifies path */
      visitStubbedEntities(entityRoute: EntityRoute): Cypress.Chainable<string>;

      /**
       * Gets an entity by name.
       * ```js
       * cy.getEntityByName(newHero.name).then(myHero => ...)
       * ```
       * @param name: Hero['name']
       */
      getEntityByProperty(
        entityType: EntityType,
        property: HeroProperty | VillainProperty
      ): Cypress.Chainable<Hero | Villain | Boy>;

      /**
       * Given a hero property (name, description or id),
       * returns the index of the hero, and the entire collection, as an object.
       */
      findEntityIndex(
        entityType: EntityType,
        property: HeroProperty
      ): Cypress.Chainable<{
        entityIndex: number;
        entityArray: Hero[] | Villain[] | Boy[];
      }>;

      /**
       * Performs crud operations GET, POST, PUT and DELETE.
       *
       * `body` and `allowedToFail are optional.
       *
       * If they are not passed in, body is empty but `allowedToFail` still is `false`.
       *
       * If the body is passed in and the method is `POST` or `PUT`, the payload will be taken,
       * otherwise undefined for `GET` and `DELETE`.
       * @param method
       * @param route
       * @param options: {body?: Hero | object; allowedToFail?: boolean}
       */

      /**
       * Resets the data in the database to the initial data.
       */
      resetData(): Cypress.Chainable<
        Response<(Hero[] & Hero) | (Villain[] & Villain) | (Boy[] & Boy)>
      >;
    }
  }
}

// implementation of above
