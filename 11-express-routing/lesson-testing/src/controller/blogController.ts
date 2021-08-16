import express, { Application, Request, Response, NextFunction } from 'express';

class BlogController {
  constructor() {}

  getAllBlogs(req: Request, res: Response) {
    res.status(404).json({
      status: 'fail',
      message: 'This page is for blogs data, but not defined yet!!',
    });
  }

  getBlog(req: Request, res: Response) {
    res.status(404).json({
      status: 'fail',
      message: 'This page is for  blog data, but not defined yet!!',
    });
  }

  createBlog(req: Request, res: Response) {
    res.status(404).json({
      status: 'fail',
      message: 'This page is for creating blog, but not defined yet!!',
    });
  }

  updateBlog(req: Request, res: Response) {
    res.status(404).json({
      status: 'fail',
      message: 'This page is for updating blog data, but not defined yet!!',
    });
  }

  deleteBlog(req: Request, res: Response) {
    res.status(404).json({
      status: 'fail',
      message: 'This page is for deleting blog, but not defined yet!!',
    });
  }
}

export const controller = new BlogController();
