'use client';

import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { commForm } from '@/state/commentSchema/commentSchema';
import { z } from 'zod';
import fetch from '@/state/query/fetch';
import CommentList from './CommentList';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import useGetQuery from '@/state/query/useGetQuery';
import { CommentType } from '@/types/types';

const CommentForm = ({ id }: { id: string }) => {
  const commData = useGetQuery('commentid', `comments/${id}`);
  const [state, dispatch] = useState<CommentType[]>();

  const router = useRouter();
  const form = useForm<z.infer<typeof commForm>>({
    resolver: zodResolver(commForm),
    defaultValues: {
      id,
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    },
  });

  const handleForm = async (value: z.infer<typeof commForm>) => {
    try {
      await fetch({
        method: 'POST',
        url: 'comments',
        data: value,
      });

      toast.success('Comment submitted successfully!');
      form.reset({
        id,
        first_name: '',
        last_name: '',
        email: '',
        message: '',
      });
      router.refresh();

      dispatch([
        ...commData,
        {
          full_name: value.first_name + value.last_name,
          email: value.email,
          message: value.message,
          date: new Date(),
          now: new Date()
        },
      ]);
    } catch (error) {
      console.error(error);
      toast.error('failed to submit comment');
    }
  };

  const data = state ? state : commData;

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleForm)}>
          <div className="my-13 p-4  rounded-2xl">
            <h6 className="mb-4">Leave a comment</h6>

            <div className="flex gap-6 mb-4">
              <div className="flex-1">
                <FormField
                  name="first_name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input className="bg-[#eee]" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-1">
                <FormField
                  name="last_name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input className="bg-[#eee]" {...field} type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="mb-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input className="bg-[#eee]" {...field} type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-6">
              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea className="bg-[#eee]" {...field}></Textarea>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="block w-full cursor-pointer rounded-2xl border border-primary bg-primary py-2 text-center text-white hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {form.formState.isSubmitting ? 'Submitting...' : 'Submit Comment'}
            </button>
          </div>
        </form>
      </Form>

      <CommentList data={data} />
    </>
  );
};

export default CommentForm;
