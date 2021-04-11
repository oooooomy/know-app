import {Toast} from "vant";

export function checkSignInForm(form) {
    if (!form.phone || !form.password) {
        Toast.fail("请输入手机号和密码")
        return false
    }
    if (form.phone.length !== 11) {
        Toast.fail("请输入11位的手机号码")
        return false
    }
    if (form.password.length < 6 || form.password.length > 20) {
        Toast.fail("请输入正确的密码")
        return false
    }
    return true
}

export function checkSignUpForm(form) {
    if (!form.avatar) {
        Toast.fail("请选择您的头像")
        return false
    }
    if (!form.phone || !form.password || !form.school || !form.nickname) {
        Toast.fail("请填写完整注册表单")
        return false
    }
    if (form.phone.length !== 11) {
        Toast.fail("请输入11位的手机号码")
        return false
    }
    if (form.nickname.length < 3 || form.nickname.length > 10) {
        Toast.fail("请输入3~10个字符的昵称")
        return false
    }
    if (form.password.length < 6 || form.nickname.length > 20) {
        Toast.fail("请输入6~20个字符的密码")
        return false
    }
    if (form.password.length < 4 || form.nickname.length > 20) {
        Toast.fail("请输入正确的学校")
        return false
    }
    return true
}

export function checkVideoForm(form) {
    if (!form.title) {
        Toast.fail("请输入视频标题")
        return false
    }
    if (form.title.length > 20) {
        Toast.fail("视频标题不能超过20个字符")
        return false
    }
    if (!form.fid) {
        Toast.fail("还没有上传视频")
        return false
    }
    if (!form.type) {
        Toast.fail("请选择稿件类型")
        return false
    }
    return true
}

export function checkArticleForm(form) {
    if (!form.title) {
        Toast.fail("请输入文章标题")
        return false
    }
    if (form.title.length > 20) {
        Toast.fail("文章标题不能超过20个字符")
        return false
    }
    if (!form.content) {
        Toast.fail("请输入正文")
        return false
    }
    if (!form.type) {
        Toast.fail("请选择文章类型")
        return false
    }
    return true
}