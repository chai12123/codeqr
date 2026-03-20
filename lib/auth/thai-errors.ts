export function authErrorToThai(error: { message: string } | Error | null): string {
  if (!error) return "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง";

  const msg = error.message.toLowerCase();

  if (msg.includes("invalid login credentials")) {
    return "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
  }
  if (msg.includes("user already registered") || msg.includes("already registered")) {
    return "อีเมลนี้ถูกใช้งานแล้ว";
  }
  if (msg.includes("email not confirmed")) {
    return "กรุณายืนยันอีเมลของคุณก่อนเข้าสู่ระบบ";
  }
  if (msg.includes("password") && msg.includes("least")) {
    return "รหัสผ่านสั้นเกินไป กรุณาใช้อย่างน้อย 6 ตัวอักษร";
  }
  if (msg.includes("signup") && msg.includes("disabled")) {
    return "ระบบปิดการสมัครสมาชิกชั่วคราว";
  }
  if (msg.includes("network") || msg.includes("fetch")) {
    return "เชื่อมต่อไม่สำเร็จ กรุณาลองอีกครั้ง";
  }
  if (msg.includes("rate limit")) {
    return "ลองบ่อยเกินไป กรุณารอสักครู่แล้วลองใหม่";
  }

  return "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง";
}
