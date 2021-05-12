import { useLazyQuery } from "@apollo/client";
import { resetIdCounter, useCombobox } from "downshift";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";
import { SEARCH_PRODUCTS_QUERY } from "../graphql/queries/searchProducts";
import {
  SEARCH_PRODUCTS,
  SEARCH_PRODUCTSVariables,
} from "../graphql/queries/types/SEARCH_PRODUCTS";
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropDown";

export const Search = () => {
  const [findItems, { data, loading }] = useLazyQuery<
    SEARCH_PRODUCTS,
    SEARCH_PRODUCTSVariables
  >(SEARCH_PRODUCTS_QUERY, { fetchPolicy: "no-cache" });
  const findItemsDebounce = debounce(findItems, 350);
  const items = data?.allProducts ?? [];

  const router = useRouter();
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange: () => {
      findItemsDebounce({
        variables: { searchTerm: inputValue },
      });
    },
    onSelectedItemChange: ({ selectedItem }) => {
      router.push({ pathname: `/product/${selectedItem.id}` });
    },
    itemToString: (item) => item?.name ?? "",
  });

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: "search",
            placeholder: "Search for an Item",
            id: "search",
            className: loading ? "loading" : "",
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              key={item.id}
              {...getItemProps({ item })}
              highlighted={index === highlightedIndex}
            >
              <img
                src={item.photo.image.publicUrlTransformed}
                alt={item.name}
                width="50"
              />
              {item.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, no items found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
};
