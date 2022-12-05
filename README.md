# frontend-challenge


#### Project Setup & Run

```sh
npm install
npm run dev
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Unit Tests (with Cypress)

```sh
npm run test:unit:dev

#  OR 

npm run test:unit # headless
```


## About the project

- Datasets and search results (as well as the `search` method) are all contained inside the store.
- `AutocompleteInput` is a simple input component that provides an input field and a template slot in which the parent component can render some data
- `BooksSearch` and `CitiesSearch` utilize the `AutocompleteInput` for capturing input, and render the results (retrieved from the pinia store) inside the slot
- beacause one of the requirements was that both the datasets and query results be stored in the store, I kept any actual filtering logic from the `AutocompletInput` component - if keeping the filtering logic internal to the `AutocompleteInput` component, it could have been done by accepting props with the dataset, the filtering function (callback) and scoped slots for rendering the results (therfore supporting both `string[]` and `object[]` datasets)
