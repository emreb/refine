---
id: useCreateMany
title: useCreateMany
siderbar_label: useCreateMany
---

`useCreateMany` is a modified version of `react-query`'s [`useMutation`](https://react-query.tanstack.com/reference/useMutation#) for multiple create mutations. It uses `createMany` method as mutation function from the `dataProvider` that is passed to `<Admin>`.  

### Features

* Shows notifications on success and error.  

* Automatically invalidates `list` queries after mutation is succesfully run.  
[Refer to React Query docs for detailed information &#8594](https://react-query.tanstack.com/guides/invalidations-from-mutations)

### Usage

Let'say we have a `categories` resource

```ts title="https://refine-fake-rest.pankod.com/categories"
{
    [
        {
            id: 1,
            title: "E-business",
        },
        {
            id: 2,
            title: "Virtual Invoice Avon",
        },
    ];
}
```


```tsx
type CategoryMutationResult = {
    id?: string | number;
    title: string;
}

const { mutate } = useCreateMany<CategoryMutationResult>();

mutate({
    resource: "categories",
    values: [
        {
            title: "New Category",
        },
        {
            title: "Another New Category"
        }
    ]
}
)
```

:::tip
`mutate` can also accept lifecycle methods like `onSuccess` and `onError`. [Refer to react-query docs for further information.](https://react-query.tanstack.com/guides/mutations#mutation-side-effects)
:::

After mutation runs `categories` will be updated as below:

```ts title="https://refine-fake-rest.pankod.com/categories"
{
    [
        {
            id: 1,
            title: "E-business",
        },
        {
            id: 2,
            title: "Virtual Invoice Avon",
        },
        // highlight-start
        {
            id: 3,
            title: "New Category",
        },
        {
            id: 4,
            title: "Another New Category",
        },
        // highlight-end
    ];
}
```
:::note
Queries that use `/categories` endpoint will be automatically invalidated to show the updated data. For example, data returned from [`useList`](#) will be automatically updated.
:::

:::tip
`useCreateMany` returns `react-query`'s `useMutation` result. It includes `mutate` with  [many other properties](https://react-query.tanstack.com/reference/useMutation).
:::

:::important
Variables passed to `mutate` must have the type of

```tsx
{
    resource: string;
    values: any[];
}
```
:::
### Return values

| Property       | Description            | Type                                                                                                                                                                                             |
| -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| mutationResult | Result of the mutation | [`UseMutationResult<`<br/>`{ data: CategoryMutationResult[] },`<br/>`unknown,`<br/>`  { resource: string; values: any[]; },`<br/>` unknown>`](https://react-query.tanstack.com/reference/useMutation) |
