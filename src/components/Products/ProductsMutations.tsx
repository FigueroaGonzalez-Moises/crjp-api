import {
    useAddProductToSectionMutation,
    useRemoveProductFromSectionMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useAddImgToProductMutation,
    useRemoveImgFromProductMutation,
    useAddOptionToProductMutation,
    useToggleProductDisplayMutation,
    useDeleteOptionsMutation,
    useUpdateOptionsMutation,
    useAddShippingToProductMutation,
    useDeleteShippingFromProductMutation,
    useToggleShippingStackableMutation,
} from "../../generated/graphql";

const ProductsMutations = () => {
    const [addProductToSection] = useAddProductToSectionMutation();
    const [removeProductFromSection] = useRemoveProductFromSectionMutation();
    const [updateProduct] = useUpdateProductMutation();
    const [deleteProduct] = useDeleteProductMutation();
    const [addImgToProduct] = useAddImgToProductMutation();
    const [deleteImg] = useRemoveImgFromProductMutation();
    const [ADD_OPT_TO_PRODUCT] = useAddOptionToProductMutation();
    const [toggleDisplay] = useToggleProductDisplayMutation();
    const [deleteOptions] = useDeleteOptionsMutation();
    const [UPDATE_OPTS] = useUpdateOptionsMutation();
    const [addShippingToProduct] = useAddShippingToProductMutation();
    const [deleteShipping] = useDeleteShippingFromProductMutation();
    const [toggleShippingStackable] = useToggleShippingStackableMutation();

    return {
        addProductToSection,
        removeProductFromSection,
        updateProduct,
        deleteProduct,
        addImgToProduct,
        deleteImg,
        ADD_OPT_TO_PRODUCT,
        toggleDisplay,
        deleteOptions,
        UPDATE_OPTS,
        addShippingToProduct,
        deleteShipping,
        toggleShippingStackable,
    };
};

export default ProductsMutations;
