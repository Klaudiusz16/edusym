/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Iterable` scalar type represents an array or a Traversable with any kind of data. */
  Iterable: { input: any; output: any; }
};

export type Category = Node & {
  __typename?: 'Category';
  _id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

/** Cursor connection for Category. */
export type CategoryCursorConnection = {
  __typename?: 'CategoryCursorConnection';
  edges?: Maybe<Array<Maybe<CategoryEdge>>>;
  pageInfo: CategoryPageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Edge of Category. */
export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Category>;
};

/** Information about the current page. */
export type CategoryPageInfo = {
  __typename?: 'CategoryPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Course = Node & {
  __typename?: 'Course';
  _id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
};

/** Cursor connection for Course. */
export type CourseCursorConnection = {
  __typename?: 'CourseCursorConnection';
  edges?: Maybe<Array<Maybe<CourseEdge>>>;
  pageInfo: CoursePageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Edge of Course. */
export type CourseEdge = {
  __typename?: 'CourseEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Course>;
};

/** Information about the current page. */
export type CoursePageInfo = {
  __typename?: 'CoursePageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a Category. */
  createCategory?: Maybe<CreateCategoryPayload>;
  /** Creates a Course. */
  createCourse?: Maybe<CreateCoursePayload>;
  /** Creates a User. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a Category. */
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  /** Deletes a Course. */
  deleteCourse?: Maybe<DeleteCoursePayload>;
  /** Deletes a User. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Updates a Category. */
  updateCategory?: Maybe<UpdateCategoryPayload>;
  /** Updates a Course. */
  updateCourse?: Maybe<UpdateCoursePayload>;
  /** Updates a User. */
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


export type MutationDeleteCourseArgs = {
  input: DeleteCourseInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateCourseArgs = {
  input: UpdateCourseInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** A node, according to the Relay specification. */
export type Node = {
  /** The id of this node. */
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  categories?: Maybe<CategoryCursorConnection>;
  category?: Maybe<Category>;
  course?: Maybe<Course>;
  courses?: Maybe<CourseCursorConnection>;
  node?: Maybe<Node>;
  user?: Maybe<User>;
  users?: Maybe<UserCursorConnection>;
};


export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCourseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCoursesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type User = Node & {
  __typename?: 'User';
  _id: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  /** The hashed password */
  password: Scalars['String']['output'];
  /** The user roles */
  roles: Scalars['Iterable']['output'];
  /** A visual identifier that represents this user. */
  userIdentifier: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

/** Cursor connection for User. */
export type UserCursorConnection = {
  __typename?: 'UserCursorConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo: UserPageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Edge of User. */
export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<User>;
};

/** Information about the current page. */
export type UserPageInfo = {
  __typename?: 'UserPageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Creates a Category. */
export type CreateCategoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

/** Creates a Category. */
export type CreateCategoryPayload = {
  __typename?: 'createCategoryPayload';
  category?: Maybe<Category>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Creates a Course. */
export type CreateCourseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** Creates a Course. */
export type CreateCoursePayload = {
  __typename?: 'createCoursePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  course?: Maybe<Course>;
};

/** Creates a User. */
export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The hashed password */
  password: Scalars['String']['input'];
  /** The user roles */
  roles: Scalars['Iterable']['input'];
  username: Scalars['String']['input'];
};

/** Creates a User. */
export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** Deletes a Category. */
export type DeleteCategoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Deletes a Category. */
export type DeleteCategoryPayload = {
  __typename?: 'deleteCategoryPayload';
  category?: Maybe<Category>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Deletes a Course. */
export type DeleteCourseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Deletes a Course. */
export type DeleteCoursePayload = {
  __typename?: 'deleteCoursePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  course?: Maybe<Course>;
};

/** Deletes a User. */
export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Deletes a User. */
export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

/** Updates a Category. */
export type UpdateCategoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Updates a Category. */
export type UpdateCategoryPayload = {
  __typename?: 'updateCategoryPayload';
  category?: Maybe<Category>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** Updates a Course. */
export type UpdateCourseInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

/** Updates a Course. */
export type UpdateCoursePayload = {
  __typename?: 'updateCoursePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  course?: Maybe<Course>;
};

/** Updates a User. */
export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  /** The hashed password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** The user roles */
  roles?: InputMaybe<Scalars['Iterable']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** Updates a User. */
export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryCursorConnection', edges?: Array<{ __typename?: 'CategoryEdge', node?: { __typename?: 'Category', name: string, id: string, image: string } | null } | null> | null } | null };


export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;