import { rootApi } from "../api/rootApi";

export const productsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        method: "POST",
        url: "/products",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useRemoveProductMutation,
  useUpdateProductMutation,
} = productsApi;
