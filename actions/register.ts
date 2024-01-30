"use server"

import bcrypt from "bcryptjs"
import { z } from "zod"

import { db } from "@/lib/db"
import { generateVerificationToken } from "@/lib/tokens"

import { RegisterSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
import { sendVerificationEmail } from "@/lib/mail"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }
  const { name, email, password } = validatedFields.data

  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {
      error: "Email already exist!",
    }
  }

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    const verificationToken = await generateVerificationToken(email)
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    )

    return { success: "Confirmation Email sent!" }
  } catch (error) {
    return { error: "Something went wrong creating user. Please try again" }
  }
}
