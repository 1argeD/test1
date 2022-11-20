import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFrom, useWatch } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { 
    existMemberId, registerUser, existMemberNickname 
} from "../../redux/user/userAction";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //아이디 중복확인 모달
    const [idDuplicate, onIdDuplicate] = useState(false);
    //닉네임 중복확인 모달
    const [nickDuplicate, onNickDuplicate] = useState(false);
    const [isRegister, onIsRegister] = useState(false);

    const idSuccess = useSelector((state) => state.user.idSuccess);
    const nickSuccess = useSelector((state) => state.user.nickSuccess);
    const registerSuccess = useSelector((state) => state.user.registerSuccess);

    const [idDoubleCheck, onIdDoubleCheck] = useState(false);
    const [nickDoubleCheck, onNickDoubleCheck] = useState(false);
    const [SignUpOnClick, onSignUpOnClick] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        control,
        formState: { isDirty, error },
    } = useFrom({mode:"onChange", userId: "text"});

    const onSumbit = (event) => {
        if (watch().password !== watch.passwordConfirm) {
            alert("비번 확인해주세요")
            return;
        }
        const body = {
            email: watch().useId,
            nickname: watch().nickname,
            password: watch().password,
            passwordConfirm: watch().passwordConfirm,
        };
        if (isDoubleCheck && nickDoubleCheck) {
            dispatch(registerUser(body));
        }
    }

    const onReset = () => {
        setValue("userId", "");
    };

    function email_check(email) {
        var regex =
            /([\w-\.]+)@((\[[0-9]{1,3}]\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        return email.trim() != "" && email != "undefined" && regex.test(email);
    }

    function nickname_check(nicknames) {
        return nicknames.trim() != "" && nicknames != "undefined";
    }
    const userId = useWatch({
        control,
        name:"userId"
    });
    const nicknames = useWatch({
        control,
        name:"nicknames",
    });

    const onDuplicateUserId = (event) => {
        if(email_check(userId)) {
            dispatch(existMemberId({ email: userId }));
            onIdDuplicate(false);
        } else {
            onIdDuplicate(true);
        }
    };

    const onDuplicateUserNicknmae = (event) => {
        if (nickname_check(nicknames)) {
            dispatch(existMemberNickname)({ nickname: nicknames});
            onIdDuplicate(fakse);
        } else {
            onNickDuplicate(ture);
        }
    };
    
    const onError = (error) => {
        console.log(error);
    };

    useEffect(() => {
        onSignUpOnClick(SignUpOnClick);
        onNickDuplicate(nickDoubleCheck);
        onIdDuplicate(idDuplicate);
    }, [
        onSignUpOnClick,
        SignUpOnClick,
        onNickDuplicate,
        nickDoubleCheck,
        onIdDuplicate,
        idDuplicate,
    ]);

    useEffect(() => {
        if (registerSuccess) {
            navigate("/login");
        } else {
        
        }
    }, [registerSuccess, navigate]);
    
    return (
        <>
        </>
    )

}  

