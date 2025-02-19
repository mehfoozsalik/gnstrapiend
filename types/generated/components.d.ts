import type { Schema, Struct } from '@strapi/strapi';

export interface AboutQuestion extends Struct.ComponentSchema {
  collectionName: 'components_about_questions';
  info: {
    displayName: 'Question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface AboutSomeQuestions extends Struct.ComponentSchema {
  collectionName: 'components_about_some_questions';
  info: {
    description: '';
    displayName: 'Some Questions';
  };
  attributes: {
    question: Schema.Attribute.Component<'about.question', false>;
  };
}

export interface AboutVision extends Struct.ComponentSchema {
  collectionName: 'components_about_visions';
  info: {
    description: '';
    displayName: 'vision';
  };
  attributes: {
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quotation: Schema.Attribute.Blocks;
    signature: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    statement: Schema.Attribute.Blocks;
    subTitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_about_why_chooseuses';
  info: {
    displayName: 'whyChooseUs';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_about_why_uses';
  info: {
    displayName: 'Why Us';
  };
  attributes: {
    smallTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whyChooseUs: Schema.Attribute.Component<'about.why-choose-us', true>;
  };
}

export interface AllFooter extends Struct.ComponentSchema {
  collectionName: 'components_all_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    address: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    email: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    phonenumber: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'footer.social-links', true>;
  };
}

export interface AllHeader extends Struct.ComponentSchema {
  collectionName: 'components_all_headers';
  info: {
    displayName: 'Header';
    icon: 'alien';
  };
  attributes: {
    buttonName: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AllProducts extends Struct.ComponentSchema {
  collectionName: 'components_all_products';
  info: {
    description: '';
    displayName: 'products';
  };
  attributes: {
    Featured: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface BlogTags extends Struct.ComponentSchema {
  collectionName: 'components_blog_tags';
  info: {
    displayName: 'tags';
  };
  attributes: {
    tag: Schema.Attribute.String;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PromotionBanner extends Struct.ComponentSchema {
  collectionName: 'components_promotion_banners';
  info: {
    description: '';
    displayName: 'Banner';
  };
  attributes: {
    bgHexColor: Schema.Attribute.String;
    leftImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    promotionalCounter: Schema.Attribute.Component<
      'promotion.count-down',
      false
    >;
    promotionalProducts: Schema.Attribute.Component<'promotion.product', true>;
    rightImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PromotionCountDown extends Struct.ComponentSchema {
  collectionName: 'components_promotion_count_downs';
  info: {
    displayName: 'Count Down';
  };
  attributes: {
    toDate: Schema.Attribute.DateTime;
  };
}

export interface PromotionProduct extends Struct.ComponentSchema {
  collectionName: 'components_promotion_products';
  info: {
    description: '';
    displayName: 'Product';
  };
  attributes: {
    products: Schema.Attribute.Component<'all.products', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.question': AboutQuestion;
      'about.some-questions': AboutSomeQuestions;
      'about.vision': AboutVision;
      'about.why-choose-us': AboutWhyChooseUs;
      'about.why-us': AboutWhyUs;
      'all.footer': AllFooter;
      'all.header': AllHeader;
      'all.products': AllProducts;
      'blog.tags': BlogTags;
      'footer.social-links': FooterSocialLinks;
      'home.hero-section': HomeHeroSection;
      'promotion.banner': PromotionBanner;
      'promotion.count-down': PromotionCountDown;
      'promotion.product': PromotionProduct;
    }
  }
}
