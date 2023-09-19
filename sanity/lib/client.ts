import { createClient } from 'next-sanity'
import {apiVersion, dataset, projectId, useCdn, token} from "@/sanity/env";


export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
})
