import axios from 'axios'; 
import { API_BACKEND_URL } from '@/app/_layout';
import { AvailabilityRequest } from '../models/Availability.types';
import axiosInstance from './axios-instance';
export const listAvailabilitiesByHairdresser = async (hairdresserId: number | undefined) => {
    if(!hairdresserId) {
        console.error("hairdresser id not provided");
        return
    }
    
    try {
        const response = await axiosInstance.get(`${API_BACKEND_URL}/api/availability/list/${hairdresserId}`);
        return response.data;
    } catch (error) {
        console.error("Error in list availabilities by hairdresser:", error);
        throw error;
    }
}

export const createAvailability = async (data: AvailabilityRequest[], hairdresserId: number | undefined) => {
    if(!hairdresserId){
        console.error("no hairdresser id provided for availability creation");
        return;
    }
    
    if(!data) {
        console.error("no data provided for availability creation");
        return;
    }
    try {
        await axiosInstance.post(`${API_BACKEND_URL}/api/availability/create/multiple/${hairdresserId}`, {availabilities: data});
    } catch (error) {
        console.error("Error create availability:", error);
        throw error;
    }
}

export const updateAvailability = async (data: AvailabilityRequest[], hairdresserId: number | undefined) => {
    if(!hairdresserId){
        console.error("no hairdresser id provided for availability edition");
        return;
    }
    
    if(!data) {
        console.error("no data provided for availability edition");
        return;
    }
    try {
        await axiosInstance.put(`${API_BACKEND_URL}/api/availability/update/multiple/${hairdresserId}`, {availabilities: data});
    } catch (error) {
        console.error("Error updating availability:", error);
        throw error;
    }
}