import { AxiosError } from 'axios'
import axiosInstance from './client'

export interface ApiResponse<T> {
  data: T
  message?: string
}

export interface ApiError {
  message: string
  statusCode: number
  errors?: Record<string, string[]>
}

async function get<T>(url: string, params?: Record<string, unknown>): Promise<T> {
  const response = await axiosInstance.get<ApiResponse<T>>(url, { params })
  return response.data.data
}

async function post<T, D = unknown>(url: string, data?: D): Promise<T> {
  const response = await axiosInstance.post<ApiResponse<T>>(url, data)
  return response.data.data
}

async function put<T, D = unknown>(url: string, data?: D): Promise<T> {
  const response = await axiosInstance.put<ApiResponse<T>>(url, data)
  return response.data.data
}

async function patch<T, D = unknown>(url: string, data?: D): Promise<T> {
  const response = await axiosInstance.patch<ApiResponse<T>>(url, data)
  return response.data.data
}

async function del<T>(url: string): Promise<T> {
  const response = await axiosInstance.delete<ApiResponse<T>>(url)
  return response.data.data
}

export function parseApiError(error: unknown): ApiError {
  if (error instanceof AxiosError && error.response) {
    return {
      message: error.response.data?.message ?? 'An error occurred',
      statusCode: error.response.status,
      errors: error.response.data?.errors,
    }
  }
  return { message: 'Network error', statusCode: 0 }
}

export const apiClient = { get, post, put, patch, delete: del }
