import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';
import wait from 'waait';
import { Store } from '../store';
import GetZipCode, { GET_CHEESES } from '../views/GetZipCode';

describe("GetZipCode Component", () => {
    let wrapper,
        mock,
        zipcode = 'input[name="zipCode"]',
        submitButton  = 'button[id="submit"]',
        message = 'div.message';

        test("Zipcode Input", () => {
            wrapper = mount(
                <MockedProvider>
                    <Store.Provider value={[{ loading: false, zip: null }]}>
                        <GetZipCode />
                    </Store.Provider>
                </MockedProvider>
            )
            wrapper.find(zipcode).simulate('change', { target: { value: "91001" } })

            expect(wrapper.find(zipcode).prop('value')).toBe("91001")
        })

        test("Disabled Submit Button", () => {
            wrapper = mount(
                <MockedProvider>
                    <Store.Provider value={[{ loading: false, zip: null }]}>
                        <GetZipCode />
                    </Store.Provider>
                </MockedProvider>
            )
            expect(wrapper.find(submitButton).prop('disabled')).toBeTruthy()
        })

        test("Activate Submit Button", () => {
            wrapper = mount(
                <MockedProvider>
                    <Store.Provider value={[{ loading: false, zip: null }]}>
                        <GetZipCode />
                    </Store.Provider>
                </MockedProvider>
            )
            wrapper.find(zipcode).simulate('change', { target: { value: "91001" } })

            expect(wrapper.find(submitButton).prop('disabled')).toBeFalsy()
        })

        test("Invalid Service Area", async () => {
            mock = {
                request: {
                    query: GET_CHEESES,
                    variables: { zip: "30327" }
                },
                result: {
                    data: { specials: [] }
                }
            }

            wrapper = mount(
                <MockedProvider mocks={[mock]} addTypename={false}>
                    <Store.Provider value={[{ loading: false, zip: null }]}>
                        <GetZipCode />
                    </Store.Provider>
                </MockedProvider>
            )

            await wait(0)

            expect(wrapper.find(message).prop('data-id')).toEqual('invalid')
        })

        test("Valid Service Area", async () => {
            mock = {
                request: {
                    query: GET_CHEESES,
                    variables: { zip: "91001" }
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
                <MockedProvider mocks={[mock]} addTypename={false}>
                    <Store.Provider value={[{ loading: false, zip: null }]}>
                        <GetZipCode />
                    </Store.Provider>
                </MockedProvider>
            )

            await wait(0)

            expect(wrapper.find(message).prop('data-id')).toEqual('valid')
        })
})