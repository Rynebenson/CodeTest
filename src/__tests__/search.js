import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import { Store } from '../store';
import Search, { GET_CHEESE } from '../components/Search';

describe("Search Component", () => {
    let wrapper,
        state,
        mock,
        dispatch = jest.fn(action => console.log(action)),
        input = 'input[name="search"]';

    test("Search Input Change", async () => {
        state = {
            loading: false,
            zip: "91001",
            basket: [
                {
                    "_id": "5ecf28c459d3781a2e99738e",
                    "cheese": {
                      "_id": "4647",
                      "name": "Raschera",
                      "country": "Italy",
                      "price": 1.78
                    },
                    "zip": "91001",
                    "percent_discount": 18,
                    "out_of_stock": false
                }
            ],
            basket_visibility: false,
            whitelist: ["5ecf28c459d3781a2e99738e"],
            sum: 1.78
        }

        wrapper = mount(
            <MockedProvider mock={[]}>
                <Store.Provider value={[state, dispatch]}>
                    <Search state={state} dispatch={dispatch} />
                </Store.Provider>
            </MockedProvider>
        )

        wrapper.find(input).simulate('change', { target: { value: "canada" } })

        await wait(0)

        expect(wrapper.find(input).prop('value')).toBe("canada")
    })

    test("Render No Results Message", () => {
        state = {
            loading: false,
            zip: "91001"
        }

        mock = {
            request: {
                query: GET_CHEESE,
                variables: {
                    zip: "91001"
                }
            },
            result: {
                data: {
                    specials: []
                }
            }
        }

        wrapper = mount(
            <MockedProvider mocks={[mock]}>
                <Store.Provider value={[state, dispatch]}>
                    <Search state={state} dispatch={dispatch} />
                </Store.Provider>
            </MockedProvider>
        )

        expect(wrapper.find('p').hasClass('no-results')).toBeTruthy()
    })

    test("Render Items", async () => {
        state = {
            loading: false,
            zip: "91001"
        }

        mock = {
            request: {
                query: GET_CHEESE,
                variables: {
                    filter: "italy",
                    zip: "91001"
                }
            },
            result: {
                data: {
                    specials: [
                        {
                            "_id": "5ecf28c459d3781a2e99738e",
                            "cheese": {
                              "_id": "4647",
                              "name": "Raschera",
                              "country": "Italy",
                              "price": 1.78
                            },
                            "zip": "91001",
                            "percent_discount": 18,
                            "out_of_stock": false
                        }
                    ]
                }
            }
        }

        wrapper = mount(
            <MockedProvider mocks={[mock]}>
                <Store.Provider value={[state, dispatch]}>
                    <Search state={state} dispatch={dispatch} />
                </Store.Provider>
            </MockedProvider>
        )

        expect(wrapper.find('div.card').length).toEqual(1)
    })
})