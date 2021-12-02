import "should"
import { StateManager } from "pro-web-app-cli-state-manager"
import { UserActionKeys } from "pro-web-common/dist/js/enums/state-manager/UserActionKeys"
import should from "should"
import { Notifications } from "pro-web-common/dist/js/enums/state-manager/Notifications"

describe("User Reducer Suite", function() {
    describe("checkusernameunique tests", function() {

    })
    it("should have initial state", () => {
        //@ts-ignore
        const state = StateManager.reducers.user(undefined, {type: "", payload: null})
        state.should.eql(StateManager.states.user)
    })
    it("should check username and nullify other inter-related properties", () => {
        const state = StateManager.reducers.user(undefined, {type: "", payload: null})
        const state2 = StateManager.reducers.user(state, {type: UserActionKeys.CHECK_USERNAME, payload: true})
        should(state2.usernameUnique).eql(true)
        should(state2.username).eql(null)
    })
    it("should request login set challenge and nullify other inter-related properties", () => {
        const state = StateManager.reducers.user(undefined, {type: "", payload: null})
        const state2 = StateManager.reducers.user(state, {type: UserActionKeys.REQUEST_LOGIN, payload: "TEST"})
        should(state2.username).eql(null)
        should(state2.usernameUnique).eql(null)
        should(state2.challenge).eql("TEST")

    })
    it("should set username and nullify other inter-related properties", () => {
        const state = StateManager.reducers.user(undefined, {type: "", payload: null})
        should(state.username).eql(null)
        const state2 = StateManager.reducers.user(state, {type: UserActionKeys.SET_USERNAME, payload: "TEST"})
        should(state2.username).eql("TEST")
    })
    it("should createuser > setusername & challenge", () => {
        const state = StateManager.reducers.user(undefined, {type: "", payload: null})
        const state1 = StateManager.reducers.user(state, {type: UserActionKeys.SET_USERNAME, payload: "TEST"})
        should(state1.username).eql("TEST") 
        const state2 = StateManager.reducers.user(state1, {type: UserActionKeys.REQUEST_LOGIN, payload: "TEST"})
        should(state2.username).eql(null)
        should(state2.usernameUnique).eql(null)
        should(state2.challenge).eql("TEST")
        should(state2.username).eql("TEST")
                
    })

})