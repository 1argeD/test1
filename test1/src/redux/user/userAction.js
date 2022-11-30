import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apis } from '../../shared/axios'


const URL = {
    BASE: process.env.REACT_APP_BASE_URL,
  };

export const userLogin = createAsyncThunk(
    'user/login',
    async (payload, { getState, rejectWithValue }) => {
        console.log(payload);
        const { user } = getState();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const response = await axios.post(
                `http://localhost:8080/members/login`,
                payload,
                config
            );
            localStorage.setItem('access-token', response.headers.authorization);
            localStorage.setItem('refresh-token', response.headers.refreshtoken);
            return response;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

/*회원 가입*/
    export const registerUser = createAsyncThunk(
        'user/register',
        async (payload, { rejectWithValue }) => {
            console.log(payload);
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const response = await axios.post(
                    `http://localhost:8080/member/signup`,
                    payload,
                    config
                );
                console.log(response);
            } catch (error) {
                if (error.respose && error.response.data.message) {
                    return rejectWithValue(error.response.data.message);
                } else {
                    return rejectWithValue(error.message);
                }
            }
        }
    );

    //유저 로그아웃
    export const logoutUser = createAsyncThunk(
        'user/logout',
        async (arg, { getState, rejectWithValue, fulfillWithValue }) => {
            const { user } = getState()
            try {
                const response = await apis.logout();
                return fulfillWithValue(response.data);
            } catch (error) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message);
                } else {
                    return rejectWithValue(error.message);
                }
            }
        }
    );
        //유저 아이디 체크
    export const existMemberId = createAsyncThunk(
        'user/existMemberId',
        async (payload, { rejectWithValue }) => {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const response = await axios.post(
                    `http://localhost:8080/members/email-check`,
                    payload,
                    config
                );
                console.log(response);
                return response;
            } catch (error) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message);
                } else {
                    return rejectWithValue(error.message);
                }
            }
        }
    );
        //유저 닉네임 체크
    export const existMemberNickname = createAsyncThunk(
        'user/existMemberNickname',
        async (payload, { rejectWithValue }) => {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                };
                const response =await axios.post(
                    `http://localhost:8080/members/nickname-check`,
                    payload,
                    config
                );
                console.log(response);
                return response;
            } catch (error) {
                if (error.response && error.response.data.message) {
                    return rejectWithValue(error.response.data.message);
                } else {
                    return rejectWithValue(error.message);
                }
            }
        }
    );