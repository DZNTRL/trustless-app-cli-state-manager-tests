import "should"
import { StateManager } from "pro-web-app-cli-state-manager/build/index"
import { AppActionKeys } from "pro-web-common/dist/js/enums/state-manager/AppActionKeys"
import should from "should"
import { Notifications } from "pro-web-common/dist/js/enums/state-manager/Notifications"

describe("App Reducer Suite", function() {
    it("should have initial state", () => {
        //@ts-ignore
        const state = StateManager.reducers.app(undefined, {type: "", payload: null})
        state.should.eql(StateManager.states.app)
    })
    it("should set notification", function() {
        const state = StateManager.reducers.app(undefined, {type: "", payload: null})
        const payload  = {type: Notifications.danger, message: "test"}
        const state2 = StateManager.reducers.app(state, {type: AppActionKeys.SET_NOTIFICATION, payload})
        should(state2.notification).eql(payload)
    })
    it("should clear notification", () => {
        const state = StateManager.reducers.app(undefined, {type: "", payload: null})
        const payload  = {type: Notifications.danger, message: "test"}
        const state2 = StateManager.reducers.app(state, {type: AppActionKeys.SET_NOTIFICATION, payload})
        should(state2.notification).eql(payload)
        const state3 = StateManager.reducers.app(state2, {type: AppActionKeys.SET_NOTIFICATION, payload: null })
        should(state3.notification).eql(null)
    })
})