import { PortableTextBlock } from '@portabletext/types';


export type MenuData = {
  id: string;
  slug: string;
  type: string;
  title: string;
};

export type CreateCommentType = {
  full_name: string;
  email: string;
  message: string;
  post: string;
};

export type CommentType = {
  full_name: string;
  email: string;
  message: string;
  date: string;
  now: string;
};

export type PostType = {
  author: {
    name: string;
    image: string;
  };
  content: PortableTextBlock;
  slug: string;
  title: string;
  date: string;
  thumb: string;
  excerpt: string;
};

export type SingleLandingPageType = {
  metadata: {
    title: string
    description: string
  }

  hero: {
    brand: string
    headline: string
    highlight: string
    description: string
    cta: {
      label: string
      href: string
      subtext: string
    }
    cast: string
    retiredLabel: string
    boostLabel: string
    epitaph: string
    epitaphStrong: string
  }

  pain: {
    eyebrow: string
    title: string
    paragraphs: string[]
    kicker: string
  }

  leaks: {
    eyebrow: string
    title: string
    description: string
    items: {
      title: string
      description: string
    }[]
  }

  reveal: {
    eyebrow: string
    title: string
    paragraphs: {
      text: string
      strong?: string
    }[]
    playbook: {
      label: string
      title: string
      titleHighlight: string
      subtitle: string
      meta: string
    }
  }

  inside: {
    eyebrow: string
    title: string
    items: {
      label: string
      title: string
      description: string
    }[]
  }

  blueprints: {
    eyebrow: string
    title: string
    description: string
    items: {
      name: string
      examples: string
    }[]
    note: string
  }

  fit: {
    eyebrow: string
    title: string
    yes: {
      title: string
      items: string[]
    }
    no: {
      title: string
      items: string[]
    }
  }

  pricing: {
    eyebrow: string
    title: string
    description: string
    priceLabel: string
    price: string
    once: string
    inclusions: string[]
    cta: {
      label: string
      href: string
      subtext: string
    }
    paymentNote: string
  }

  proof: {
    eyebrow: string
    title: string
    publisherNote: string
  }

  faq: {
    eyebrow: string
    title: string
    items: {
      question: string
      answer: string
    }[]
  }

  finalCta: {
    eyebrow: string
    title: string
    description: string
    cta: {
      label: string
      href: string
      subtext: string
    }
  }

  footer: {
    copyright: string
    trademarks: string
    disclaimer: string
  }
}

export type SinglePostType = {
  author: {
    name: string;
    image: string;
  };
  comment: {
    full_name: string;
    email: string;
    date: string;
    message: string;
  };
  id: string;
  content: PortableTextBlock;
  slug: string;
  title: string;
  date: string;
  thumb: string;
  excerpt: string;
};

export type PageType = {
  title: string;
  content: PortableTextBlock;
  slug: string;
  excerpt: string;
};
