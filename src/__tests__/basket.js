import React from 'react';
import { mount } from 'enzyme';
import { Store } from '../store';
import Basket from '../components/Basket';

describe("Basket Component", () => {
    let wrapper,
        state,
        dispatch = jest.fn(action => console.log(action));

    test("Renders empty basket message", () => {
        state = {
            loading: false,
            zip: "91001",
            basket: [],
            basket_visibility: false,
            whitelist: [],
            sum: 0
        }

        wrapper = mount(
            <Store.Provider value={[state, dispatch]}>
                <Basket state={state} dispatch={dispatch} />
            </Store.Provider>
        )

        expect(wrapper.find('p').hasClass('empty-message')).toBeTruthy()
    })

    test("Renders contents with items in basket", () => {
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
            sum: 0
        }

        wrapper = mount(
            <Store.Provider value={[state, dispatch]}>
                <Basket state={state} dispatch={dispatch} />
            </Store.Provider>
        )

        expect(wrapper.find('div.item').length).toEqual(1)
    })
})