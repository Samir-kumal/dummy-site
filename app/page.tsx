"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, InputNumber, Select, DatePicker, Button, Typography, Row, Col, Card, Space } from 'antd';
import { UserOutlined, HomeOutlined, DollarOutlined, TeamOutlined, CalendarOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import Header from './components/Header';

const { Title } = Typography;
const { Option } = Select;

const Page = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    router.push('/posting');
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <Card>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
            Insurance Application Form
          </Title>
          <Form form={form} layout="vertical" onFinish={onFinish} size="large">
            <Row gutter={24}>
              <Col span={24}>
                <Title level={4}>Personal Information</Title>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="heightFeet" label="Height (Feet)" rules={[{ required: true }]}>
                  <InputNumber min={1} max={8} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="heightInches" label="Height (Inches)" rules={[{ required: true }]}>
                  <InputNumber min={0} max={11} style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="weight" label="Weight (lbs)" rules={[{ required: true }]}>
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                  <Select>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="maritalStatus" label="Marital Status" rules={[{ required: true }]}>
                  <Select>
                    <Option value="single">Single</Option>
                    <Option value="married">Married</Option>
                    <Option value="divorced">Divorced</Option>
                    <Option value="widowed">Widowed</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Title level={4} style={{ marginTop: '20px' }}>Household Information</Title>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="householdIncome" label="Household Income" rules={[{ required: true }]}>
                  <InputNumber style={{ width: '100%' }} prefix={<DollarOutlined />} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="householdSize" label="Household Size" rules={[{ required: true }]}>
                  <InputNumber style={{ width: '100%' }} prefix={<TeamOutlined />} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Title level={4} style={{ marginTop: '20px' }}>Address</Title>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="state" label="State" rules={[{ required: true }]}>
                  <Input prefix={<HomeOutlined />} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="zip" label="ZIP Code" rules={[{ required: true, pattern: /^\d{5}$/, message: 'Please enter a valid 5-digit ZIP code' }]}>
                  <Input prefix={<HomeOutlined />} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name="city" label="City" rules={[{ required: true }]}>
                  <Input prefix={<HomeOutlined />} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={24}>
              <Col span={24}>
                <Title level={4} style={{ marginTop: '20px' }}>Additional Information</Title>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="medicalCondition" label="Medical Condition">
                  <Input prefix={<MedicineBoxOutlined />} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="currentlyInsured" label="Currently Insured">
                  <Select>
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="residenceType" label="Residence Type">
                  <Select>
                    <Option value="house">House</Option>
                    <Option value="apartment">Apartment</Option>
                    <Option value="condo">Condo</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="expectantParent" label="Expectant Parent">
                  <Select>
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ marginTop: '30px' }}>
              <Space size="large" style={{ width: '100%', justifyContent: 'center' }}>
                <Button size="large">Previous</Button>
                <Button type="primary" htmlType="submit" size="large">Next</Button>
              </Space>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Page;