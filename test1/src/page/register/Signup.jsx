import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { appendErrors, useFrom, useWatch } from "react-hook-form"
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
        formState: { isDirty, errors },
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
        if (idDoubleCheck && nickDoubleCheck) {
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
            {!registerSuccess && (
                <GlobalModal
                    content1={`아이디 혹은 닉네임 중복확인 바랍니다.`}
                    isModal={idDuplicate}
                    setIsModal={onIdDuplicate}
                />
            )}
            {idDuplicate && !nickDuplicate && idSuccess && (
                <GlobalModal
                    content1={`사용이 가능한 아이디 입니다.`}
                    isModal={idDuplicate}
                    setIsModal={onIdDuplicate}
                />
            )}
            {idDuplicate && !nickDuplicate && !idSuccess && (
                <GlobalModal
                    content1={`이미 존재하는 아이디 입니다.`}
                    isModal={idDuplicate}
                    setIsModal={onIdDuplicate}
                />
            )}
            {!idDuplicate && nickDuplicate && nickSuccess && (
                <GlobalModal
                    content1={`사용 가능한 닉네임 입니다.`}
                    isModal={nickDuplicate}
                    setIsModal={onNickDuplicate}
                />
            )}
            {!idDuplicate && nickDuplicate && !nickDuplicate && (
                <GlobalModal
                    content1={`이미 존재하는 닉네임입니다.`}
                    isModal={nickDuplicate}
                    setIsModal={onNickDuplicate}
                />
            )}
            <Form 
                className="signup-form"
                onSumbit={handleSubmit(onSumbit,onError,onDuplicateUserId)}
                >
                    <TitleWrapper>
                        <Title>회원가입</Title>
                    </TitleWrapper>
                    <Comtatiner>
                        <Label>아이디</Label>
                    </Comtatiner>
                    <inputWrapper>
                        <Input
                            type="password"
                            tabIndex="2"
                            className="input"
                            {...register("password",{
                                required:"비밀번호는 숫자, 문자 조합",
                                pattern: {
                                    value: /^[A-Za-z0-9]{6,12}$/,
                                    message: "비밀번호는 숫자, 문자 조합 6자 이상 적어주세요.",
                                },
                            })}
                            aria-invalid={
                                !isDirty ? undefined : appendErrors.password ? "true" : "false"
                            }
                            name="password"
                            />
                            {appendErrors.password && (
                                <HelperText2>{errors?.password?.message}</HelperText2>
                            )}

                            {!errors.password && (
                                <HelperText>
                                    {"비밀번호는 숫자, 문자 조합 6자 이상 적어주세요"}
                                </HelperText>
                            )}
                    </inputWrapper>

                    <Label>비밀번호 확인</Label>
                    <inputWrapper>
                        <Input
                            type="password"
                            className="input"
                            tabIndex="2"
                            {...register("passwordconfirm", {
                                required:"비밀번호는 숫자, 문자 조합 6자 이상 적어주세요",
                                pattern: {
                                    value: /^[A-Za-z0-9]{6,12}$/,
                                    message: "비밀번호는 숫자, 문자 조합 6자 이상 적어주세요.",
                                },
                            })}
                            aria-invalid={
                                !isDirty
                                    ? undefined
                                    : errors.passwordConfirm
                                    ? "true"
                                    : "false"
                            }
                            name="passwordConfirm"
                        />
                        {errors.passwordConfirm && (
                            <HelperText2>{errors?.passwordConfirm?.message}</HelperText2>
                        )}
                        {!errors.passwordConfirm && (
                            <HelperText>
                                {"비밀번호는 숫자, 문자 조합 6자 이상 적어주세요."}
                            </HelperText>
                        )}
                    </inputWrapper>
                    
                    <Label>닉네임</Label>
                    <inputWrapper>
                            <Input
                                type="text"
                                className="input"
                                tabIndex="2"
                                onChange={() => onNickDuplicate(false)}
                                {...register("nickname", {
                                    required: "사용할 닉네임을 적어주세요."
                                })}
                                aria-invalid={
                                    !isDirty ? undefined : errors.nickName ? "ture" : "false"
                                }
                                name="nickname"
                            />
                            <ButtonWrapper>
                                <Button
                                content={"중복체크"}
                                className="nickcheck-btn"
                                onClick={(event) => {
                                    event.prevenDfault();
                                    event.stopPropagation();
                                    onDuplicateUserNicknmae();
                                    onNickDuplicate((prev) => ! prev);
                                    onNickDoubleCheck(true)
                                }}
                                ></Button>
                            </ButtonWrapper>
                    </inputWrapper>
            </Form>
        </>
    )

}  

