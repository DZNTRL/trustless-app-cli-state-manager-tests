import { IUser } from "pro-web-common/dist/js/interfaces/service/IUser"

import { IUser as IUserRepo } from "pro-web-common/dist/js/interfaces/repo/IUser"
import { IUser as IUserModel } from "pro-web-common/dist/js/interfaces/models/IUser"
import mysql from "mysql2/promise"
import { IResponse } from "pro-web-common/dist/js/interfaces/IResponse"
import { ResponseMessages } from "pro-web-common/dist/js/enums/ResponseMessages"
import { Response } from "pro-web-common/dist/js/Response"

export class User implements IUser {
    repo: IUserRepo
    constructor(pool: mysql.Pool) {
    }
    checkUsernameUnique(username) {
        const resp = new Response<boolean>(true)
        if(username === null) {
            resp.Data = null
            resp.IsError = true
            resp.Message = ResponseMessages.NotFound.toString()
        } else {
            if(username === "TEST") {

            } else {
                resp.Data = false
            }    
        }
        return new Promise<IResponse<boolean>>((res, rej) => {
            res(resp)
        })

    }
    createUser(username, publicKey) {
        const resp = new Response<number>(1)
        if(username === null) {
            resp.Data = null
            resp.IsError = true
            resp.Message = ResponseMessages.NoRecordsUpdated.toString()
        } else {
            if(username === "TEST" && publicKey === "TEST") {
            
            } else {
                resp.Data = 0
                resp.Message = ResponseMessages.NoRecordsUpdated.toString()
            }    
        }

        return new Promise<IResponse<number>>((res, rej) => {
            res(resp)
        })
    }
    getPublicKey(username) {
        const resp = new Response<string>("TEST")
        if(username === "TEST") {
            
        } else {
            resp.Data = null
        }

        return new Promise<IResponse<string>>((res, rej) => {
            res(resp)
        })
    }
    requestLogin(username) {
        const resp = new Response<string>("TEST")
        if(username === null) {
            resp.Data = null
            resp.Message = ResponseMessages.NotFound.toString()
            resp.IsError = true
        } else {
            if(username === "TEST") {
            
            } else {
                resp.Data = null
                resp.Message = ResponseMessages.NotFound.toString()
            }    
        }

        return new Promise<IResponse<string>>((res, rej) => {
            res(resp)
        })
    }
    login(username, challenge) {
        const resp = new Response<boolean>(true)
        if(username === null) {
            resp.Data = null
            resp.IsError = true
            resp.Message = ResponseMessages.NotFound.toString()
        } else {
            if(username === "TEST") {

            } else {
                resp.Data = false
                resp.Message = ResponseMessages.NotFound.toString()
            }    
        }
        return new Promise<IResponse<boolean>>((res, rej) => {
            res(resp)
        })
    }
    get(username) {
        const resp = new Response<IUserModel>({id: 0, username: "", publicKey: "", isAdmin: false})
        if(username === "TEST") {

        } else {
            resp.Data = null
            resp.Message = ResponseMessages.NotFound.toString()
        }
        return new Promise<IResponse<IUserModel>>((res, rej) => {
            res(resp)
        })
    }
}